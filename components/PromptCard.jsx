"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [copied, setCopied] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      },
      () => {
        alert("Failed to copy text. Please try again.");
      }
    );
  };

  const handleImageError = () => {
    setImageError(true);
  };

  
  const createdAtDate = new Date(post.createdAt);
  const isValidDate = !isNaN(createdAtDate.getTime());
  console.log(typeof(isValidDate))

  const creationDate = isValidDate
    ? createdAtDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date not available";

  return (
    <div className="prompt_card  rounded-lg shadow-lg bg-slate-50 w-full">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex items-center gap-3 cursor-pointer">
          {imageLoading && (
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
          )}
          <Image
            src={
              imageError
                ? "/assets/images/profile.png"
                : post.creator.image || "/assets/images/profile.png"
            }
            alt={
              post.creator.username
                ? `${post.creator.username}'s profile picture`
                : "Default profile picture"
            }
            width={40}
            height={40}
            className="rounded-full object-contain"
            onLoadingComplete={() => setImageLoading(false)}
            onError={handleImageError}
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div
          className="copy_btn p-2 ml-2 mb-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy"}
        >
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            alt={copied ? "Tick icon" : "Copy icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700 leading-relaxed">
        {post.prompt}
      </p>

      <p
        className="font-inter text-sm text-blue-600 cursor-pointer hover:text-blue-800"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      <p className="font-inter text-xs text-gray-500 mt-2 text-right">
        {creationDate}
      </p>

      {session?.user?.id === post.creator._id && pathname === "/profile" && (
        <div className="flex justify-between items-center border-t border-gray-200 pt-3">
          <p
            className="font-inter text-sm text-green-600 cursor-pointer hover:text-green-800"
            onClick={handleEdit}
            aria-label="Edit prompt"
          >
            Edit
          </p>
          <p
            className="font-inter text-sm text-red-600 cursor-pointer hover:text-red-800"
            onClick={handleDelete}
            aria-label="Delete prompt"
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
