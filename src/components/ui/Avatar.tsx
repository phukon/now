import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full border-2 border-black object-cover"
      />
    </>
  );
};

export default Avatar;
