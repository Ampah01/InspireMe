import PromptCard from "@components/PromptCard"; 

const Profile = ({name, desc, data, handleDelete, handleEdit}) => {
  return (
    <section className="w-full sm:px-16 px-6 md:px-10 min-h-screen">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="my-10 grid grid-cols-1 mds:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
