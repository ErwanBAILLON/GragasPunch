import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-white">
          <Image src="/logo_grasapunch.png" alt="logo" width={50} height={50} />
        </div>
        
        <nav className="flex space-x-4">
          <Link href="/shop" className="text-gray-800 font-bold text-lg hover:text-white transition-colors">
            Shop
          </Link>
          <Link href="/news" className="text-gray-800 font-bold text-lg hover:text-white transition-colors">
            News
          </Link>
          <Link href="/" className="text-gray-800 font-bold text-lg hover:text-white transition-colors">
            Home
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Link href="/cart">
            <Image src="/Shopping_cart_grasapunch.png" alt="cart" width={30} height={30} />
          </Link>
        </div>
      </div>
    </header>
  );
}