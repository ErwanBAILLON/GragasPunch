import Layout from "@/components/Layout/Layout";
import 'tailwindcss/tailwind.css';
import Link from "next/link";
import articles from "@/public/news.json";

export default function News() {
    const parseDate = (dateString: string): number => {
        const [day, month, year] = dateString.split(' ');
        const monthIndex = new Date(Date.parse(month +" 1, 2012")).getMonth();
        const date = new Date(`${year}-${monthIndex + 1}-${day}`);
        return date.getTime();
    };
    
    articles.sort((a, b) => parseDate(b.date) - parseDate(a.date));

    return (
        <Layout>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-8">News & Blog</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="mt-4">
                                    <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                    <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                                    <Link href={`/news/${article.uri}`}>
                                        <p className="text-teal-500 font-semibold hover:underline cursor-pointer">Read more</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
