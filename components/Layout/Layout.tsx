// components/Layout.tsx

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
}

export default function Layout({ children, title, description, url }: LayoutProps) {
  return (
    <>
      <Meta
        title={title || "GrasaPunch - Natural Energy Drinks with Arasgrasa"}
        description={
          description ||
          "Discover GrasaPunch's range of natural energy drinks made with Arasgrasa. Boost your energy with healthy and natural ingredients. Order online now!"
        }
        keywords="GrasaPunch, Arasgrasa, energy drinks, natural energy, healthy drinks, buy energy drinks"
        url={url || "https://grasapunch.live"}
        image="/logo_grasapunch.png"
      />
      <main className="flex flex-col min-h-screen">
        <Header />
        <Body>{children}</Body>
        <Footer />
      </main>
    </>
  );
}
