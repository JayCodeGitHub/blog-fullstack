import Navbar from "@/components/navbar";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  let posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

  return (
    <main>
      <Navbar />
      <h1>Blog</h1>
    </main>
  );
}
