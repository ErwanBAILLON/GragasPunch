import styles from './Layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/logo_grasapunch.png" alt="logo" width={80} height={80} />
            </div>
            <div>
                <nav className={styles.nav}>
                    <Link href="/shop" className='mr-4'>
                        shop
                    </Link>
                    <Link href="/news">
                        news
                    </Link>
                    <Link href="/more">
                        more
                    </Link>
                </nav>
            </div>
            <div className={styles.cart}>
                <Link href="/cart">
                    <Image src="/Shopping_cart_grasapunch.png" alt="cart" width={30} height={30} />
                </Link>
            </div>
          </div>
        </header>
      );
    };
  