import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>3RILL</h2>
        {/* <Image src="/logo.png"  height={100} width={200} /> */}
      </div>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
      <Link href={'/users'}>
        <a>Users</a>
      </Link>
    </nav>
  );
};

export default Navbar;
