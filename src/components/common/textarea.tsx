import { HTMLProps, forwardRef } from "react";
import { cn } from "src/core/function/cn";

const TextArea = forwardRef<HTMLTextAreaElement, HTMLProps<HTMLTextAreaElement>>((props, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={cn(
        "h-40 w-full resize-none rounded-[0.25rem] bg-[#F4F4F5] px-[1rem] py-[0.875rem] text-base font-normal text-[#1E1E1E] outline-none placeholder:text-[#A2A9B5]",
        props.className,
      )}
    />
  );
});

export default TextArea;
TextArea.displayName = "TextArea";
