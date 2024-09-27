import { useState, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import 'tailwindcss/tailwind.css';
import Link from "next/link";
import articlesData from "@/public/news.json";
import { format, parse } from "date-fns";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

type Article = {
    id: number;
    uri: string;
    title: string;
    excerpt: string;
    date: string;
    url_markdown: string;
    image?: string; // Optionnelle, à ajouter dans vos données JSON
};

export default function News() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortedArticles, setSortedArticles] = useState<Article[]>([]);
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    // Fonction pour parser et formater les dates
    const parseDate = (dateString: string): Date => {
        return parse(dateString, "MMMM d, yyyy", new Date());
    };

    // Trier les articles selon l'ordre sélectionné et la recherche
    useEffect(() => {
        let articles = [...articlesData];

        // Filtrer par recherche
        if (searchQuery.trim() !== "") {
            articles = articles.filter(article =>
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Trier par date
        articles.sort((a, b) => {
            const dateA = parseDate(a.date).getTime();
            const dateB = parseDate(b.date).getTime();
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

        setSortedArticles(articles);
    }, [searchQuery, sortOrder]);

    return (
        <Layout>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">News & Blog</h1>
                    
                    {/* Barre de Recherche et Boutons de Tri */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
                        {/* Barre de Recherche */}
                        <div className="relative w-full md:w-1/2">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        
                        {/* Boutons de Tri */}
                        <div className="flex space-x-4">
                            <button
                                onClick={() => setSortOrder("newest")}
                                className={`px-4 py-2 rounded-md font-semibold ${
                                    sortOrder === "newest" 
                                        ? "bg-teal-600 text-white" 
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                } transition-colors duration-300`}
                            >
                                Newest First
                            </button>
                            <button
                                onClick={() => setSortOrder("oldest")}
                                className={`px-4 py-2 rounded-md font-semibold ${
                                    sortOrder === "oldest" 
                                        ? "bg-teal-600 text-white" 
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                } transition-colors duration-300`}
                            >
                                Oldest First
                            </button>
                        </div>
                    </div>

                    {/* Grille des Articles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedArticles.length > 0 ? (
                            sortedArticles.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-white p-4 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
                                >
                                    {/* Image de l'article (si disponible) */}
                                    {article.image && (
                                        <div className="mb-4">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                width={400}
                                                height={200}
                                                className="w-full h-40 object-cover rounded-md"
                                            />
                                        </div>
                                    )}
                                    
                                    {/* Titre */}
                                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                                    
                                    {/* Extrait */}
                                    <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                                    
                                    {/* Date */}
                                    <p className="text-gray-500 text-sm mb-4">
                                        {format(parseDate(article.date), "MMMM d, yyyy")}
                                    </p>
                                    
                                    {/* Lien "Read more" */}
                                    <Link href={`/news/${article.uri}`} className="text-teal-500 font-semibold hover:underline">
                                            Read more
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-3 text-gray-700">No articles found.</p>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
