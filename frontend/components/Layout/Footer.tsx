import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-yellow-400 py-6 shadow-inner position-sticky bottom-0">
            <div className="container mx-auto text-center">
                <p className="text-gray-800 font-bold mb-2">
                    GRASAPUNCH - © 2024
                </p>
                <p className="text-gray-800 mb-4 text-sm">
                    THIS WEBSITE IS A STUDENT PROJECT, FOR EDUCATIONAL PURPOSES ONLY (NOTHING FOR SALE)
                </p>
                <nav className="flex justify-center space-x-4">
                    <Link href="/about" className="text-gray-800 font-bold hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-800 font-bold hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
