import React from "react";
import Link from "next/link";

interface PostContentCardProp {
  className?: string;
  align?: "left" | "center";
}

const PostContentCard: React.FC<PostContentCardProp> = ({
  className = "",
  align,
}) => {
  const isCenter = align === "center";

  const additionalRootClass = `${className} ${isCenter && "text-center"}`;

  return (
    <div className={`post-content-card ${additionalRootClass}`}>
      <ul className={`list-none p-0 mb-4 ${isCenter && "flex justify-center"}`}>
        <li>
          <Link href='/'>
            <a className='uppercase link-2 underline-offset-1'>accessibility</a>
          </Link>
        </li>
      </ul>
      <h3 className={`mb-1 font-medium ${isCenter && "w-9/12 mx-auto"}`}>
        <Link href='/'>
          <a className='link hover:decoration-1 hover:underline-offset-4 hover:decoration-primary-o-8'>
            How to build tech for good — and turn a profit dsfsdfds sdfsdfsd
            sdfsdfsdfsdf
          </a>
        </Link>
      </h3>
      <p className={`mb-6 ${isCenter && "w-9/12 mx-auto"}`}>
        Its combining purpose and profit
      </p>
      <span className='font-heading text-gray-200'>03 min read</span>
    </div>
  );
};

export default PostContentCard;
