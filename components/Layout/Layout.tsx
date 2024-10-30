// components/Layout.tsx

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  urlCanonical?: string;
}

export default function Layout({ children, urlCanonical }: LayoutProps) {
  return (
    <>
      <Header urlCanonical={urlCanonical} />
      <Body>{children}</Body>
      <Footer />
    </>
  );
}
