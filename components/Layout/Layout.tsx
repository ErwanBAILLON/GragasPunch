import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <Body>{children}</Body>
            <Footer />
        </main>
    );
}