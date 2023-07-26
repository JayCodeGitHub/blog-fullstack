import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
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
