import clsx from "clsx";
import { ChangeEvent } from "react";

interface TextAreaProps {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={clsx(
        "h-40 w-full resize-none rounded-[0.25rem] bg-[#F4F4F5] px-[1rem] py-[0.875rem] outline-none",
        props.className,
      )}
    />
  );
};

export default TextArea;
