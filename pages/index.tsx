import Link from "next/link";


const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/contact">About</Link>
    </p>
  </div>
);

export default IndexPage;