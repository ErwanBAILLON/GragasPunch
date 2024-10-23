import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
    urlCanonical?: string;
}

export default function Layout({ children, urlCanonical }: LayoutProps) {

    return (
        <div className="flex flex-col min-h-screen">
            <Header urlCanonical={urlCanonical} />
            <Body>{children}</Body>
            <Footer />
        </div>
    );
}
