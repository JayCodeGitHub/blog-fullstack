export default function Form() {
  return (
    <form className="w-full max-w-3xl mt-4 space-y-4">
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
