'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ url, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={`rounded p-1 ${pathname === url && 'bg-black text-white'}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
