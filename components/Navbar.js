import Image from 'next/Image';
import Link from 'next/Link';

export default function Navbar() {
  return (
    <div className="fixed w-full h-20 z-[100">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/tyster_logo.png" width="50" height="50" />
        <div>
          <ul className="hidden md:flex space-x-6 font-semibold">
            <Link href='/'>
              <li>Home</li>
            </Link>
            <Link href='/'>
              <li>Pricing</li>
            </Link>
            <Link href='/'>
              <li>About Us</li>
            </Link>
            <Link href='/'>
              <li>Careers</li>
            </Link>
            <Link href='/'>
              <li>Community</li>
            </Link>
          </ul>
        </div>
        <button className='px-8 py-2 transition ease-in-out delay-50 hover:translate-y-1'>
          Get Started
        </button>
      </div>
    </div>
  );
}
