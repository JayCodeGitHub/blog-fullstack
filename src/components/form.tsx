import { prisma } from "@/lib/prisma";

export default function Form({ afterSave }: any) {
  async function createPost(data: Iterable<readonly [PropertyKey, any]>) {
    "use server";

    let { title, content } = Object.fromEntries(data);

    let post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    await afterSave(post);
  }

  return (
    <form action={createPost} className="w-full max-w-3xl mt-4 space-y-4">
      <div>
        <input
          className="w-full"
          placeholder="Title"
          type="text"
          name="title"
          required
        />
      </div>
      <div>
        <textarea
          className="w-full"
          placeholder="Write something interesting..."
          name="content"
          required
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="px-3 py-1 font-medium text-white bg-sky-500"
        >
          Create post
        </button>
      </div>
    </form>
  );
}
