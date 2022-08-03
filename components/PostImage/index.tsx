import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IPostImage {
  src: StaticImageData;
  href: string;
  className?: string;
}

const PostImage: React.FC<IPostImage> = ({ src, href, className = "" }) => {
  return (
    <Link href={href}>
      <a className={`rounded-2xl overflow-hidden block ${className}`}>
        <Image
          className='saturate-0 transition duration-300 hover:scale-110 hover:saturate-100 hover:ease-popup'
          layout='responsive'
          src={src}
          alt='Latest Post'
        />
      </a>
    </Link>
  );
};

export default PostImage;
