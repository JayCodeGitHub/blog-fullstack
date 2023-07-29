import Navbar from "@/components/navbar";
import Form from "@/components/form";
import { redirect } from "next/navigation";

export default function Create() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center pt-32">
        <Form
          afterSave={async (post: { id: any }) => {
            "use server";

            redirect(`/post/${post.id}`);
          }}
        />
      </main>
    </>
  );
}
