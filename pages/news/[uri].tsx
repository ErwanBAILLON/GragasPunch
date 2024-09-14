import { GetStaticPaths, GetStaticProps } from 'next';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import * as articles from "@/public/news.json";
import Layout from '@/components/Layout/Layout';
import fs from 'fs';
import path from 'path';
// Utilisation de `remark` et `remark-html` avec import dynamique
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

  return {
    props: {
      article,
      markdownContent: contentHtml,
    },
  };
};

export default function Article({ article, markdownContent }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500">{article.date}</p>
        </header>
        <div className="prose prose-lg mx-auto text-left">
          <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
        </div>
      </div>
    </Layout>
  );
}
