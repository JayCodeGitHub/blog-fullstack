import Link from "next/link";

export default function Create() {
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
      <h1>Create</h1>
    </main>
  );
}
