import Navbar from "@/components/navbar";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default async function Home() {
  let posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

  return (
    <main>
      <Navbar />
      <div>
        <p className="text-2xl font-bold text-gray-700">All posts</p>

        <div className="mt-4 space-y-2">
          {posts.map(
            (post: {
              id: Key | null | undefined;
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <div key={post.id}>
                <Link
                  href={`/post/${post.id}`}
                  className="underline underline-offset-2 decoration-gray-300"
                >
                  {post.title}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
