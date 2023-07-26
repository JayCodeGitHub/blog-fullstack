import Link from "next/link";

export default function Home() {
  return (
    <main>
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
      <h1>Blog</h1>
    </main>
  );
}
