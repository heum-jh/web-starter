import { ChangeEvent } from "react";
import { cn } from "src/core/function/cn";

interface TextAreaProps {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={cn(
        "h-40 w-full resize-none rounded-[0.25rem] bg-[#F4F4F5] px-[1rem] py-[0.875rem] outline-none",
        props.className,
      )}
    />
  );
};

export default TextArea;
