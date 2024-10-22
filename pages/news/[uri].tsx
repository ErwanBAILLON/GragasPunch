// pages/news/[uri].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import articles from "@/public/news.json";
import Layout from '@/components/Layout/Layout';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

interface Article {
  id: number;
  uri: string;
  title: string;
  excerpt: string;
  date: string;
  url_markdown: string;
}

interface Props {
  article: Article;
  markdownContent: string;
  relatedArticles: Article[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { uri: article.uri },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { uri } = context.params as { uri: string };
  const article = articles.find((article) => article.uri === uri);

  if (!article) {
    return {
      notFound: true,
    };
  }

  // Lire le fichier Markdown
  const markdownFilePath = path.join(process.cwd(), 'public', article.url_markdown);
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');

  // Convertir le Markdown en HTML
  const processedContent = await remark().use(html).process(markdownContent);
  const contentHtml = processedContent.toString();

  // Shuffle des articles pour en sélectionner 3 aléatoirement (autres que l'article actuel)
  const shuffledArticles = articles
    .filter((a) => a.uri !== uri) // Ne pas inclure l'article actuel
    .sort(() => 0.5 - Math.random()) // Mélanger
    .slice(0, 3); // En garder 3

  return {
    props: {
      article,
      markdownContent: contentHtml,
      relatedArticles: shuffledArticles, // Articles sélectionnés aléatoirement
    },
  };
};

export default function Article({ article, markdownContent, relatedArticles }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Content */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500">{article.date}</p>
        </header>
        <div className="prose prose-lg mx-auto">
          <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
        </div>

        {/* Related Articles Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Related News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <div key={related.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{related.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{related.date}</p>
                  <p className="text-sm text-gray-700">{related.excerpt}</p>
                </div>
                <div className="p-4">
                  <a
                    href={`/news/${related.uri}`}
                    className="text-indigo-600 hover:underline font-semibold"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
