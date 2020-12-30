import Link from 'next/link';

export default function NavButton({ toPage, children }) {
  return (
    <li className="hover:bg-blue-800 hover:text-white">
      <Link href={toPage}>
        <a className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-medium">
          {children}
        </a>
      </Link>
    </li>
  );
}
