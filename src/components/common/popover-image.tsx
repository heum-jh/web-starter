import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "src/core/function/cn";

const PopoverImage = ({ width, height, src, alt, className, ...res }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Image
        {...res}
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        onClick={() => setIsOpen(true)}
        className={cn("cursor-pointer object-cover", className)}
      />
      <div
        className={clsx(
          "fixed inset-0 z-8 flex h-full w-full items-center justify-center bg-[#1e1e1e99]",
          isOpen ? "" : "hidden",
        )}
      >
        <div className="h-auto w-full">
          <div className="relative h-[100vw] w-full rounded border border-[#F0F1F2]">
            <Image
              src={src}
              alt={alt}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              className="object-cover"
            />
          </div>
          <button
            type="button"
            className="ml-auto mt-4 flex items-center justify-end gap-2 px-5 font-normal text-white"
            onClick={() => setIsOpen(false)}
          >
            닫기
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.22165 19.7803C3.92876 19.4875 3.92876 19.0126 4.22165 18.7197L10.9392 12.0021L4.22168 5.28453C3.92879 4.99164 3.92879 4.51676 4.22168 4.22387C4.51458 3.93098 4.98945 3.93098 5.28234 4.22387L11.9998 10.9415L18.7173 4.22396C19.0102 3.93106 19.4851 3.93106 19.778 4.22396C20.0709 4.51685 20.0709 4.99172 19.778 5.28461L13.0605 12.0021L19.7781 18.7196C20.071 19.0125 20.071 19.4874 19.7781 19.7802C19.4852 20.0731 19.0103 20.0731 18.7174 19.7802L11.9998 13.0628L5.28231 19.7803C4.98942 20.0732 4.51455 20.0732 4.22165 19.7803Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default PopoverImage;
