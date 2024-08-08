import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSumbit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="text-slate-100 animate-pulse">{type} Prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} & Share Prompt provides a diverse array of writing prompts to inspire and fuel creativity for writers at any level. Discover new ideas, share your own, and connect with a vibrant writing community.
      </p>
    </section>
  );
};

export default Form;
