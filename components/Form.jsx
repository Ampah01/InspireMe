import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col sm:px-16 px-6">
      <h1 className="head_text text-left">
        <span className="text-slate-100 animate-pulse">{type} Prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} & Share Prompt provides a diverse array of writing prompts to
        inspire and fuel creativity for writers at any level. Discover new
        ideas, share your own, and connect with a vibrant writing community.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 w-full max-w-md">
        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your prompt here..."
          className="form_textarea"
          rows="5"
          required
          aria-label="Prompt text"
        ></textarea>

        <input
          type="text"
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="Add tags (separate by commas)"
          className="form_input"
          aria-label="Tags"
        />

        <div className="flex justify-between mt-3">
          <Link href="/" className="text-slate-50 text-sm font-semibold">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-slate-900 text-white rounded-md hover:bg-slate-50 hover:text-slate-800"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
