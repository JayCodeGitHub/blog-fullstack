import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-lg w-ful">
      <ul className="flex gap-5 px-10 py-5">
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
}
