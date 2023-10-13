import clsx from "clsx";
import { ChangeEvent } from "react";

interface TextInputProps {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput = (props: TextInputProps) => {
  return (
    <input
      {...props}
      type="text"
      className={clsx("h-[3.25rem] w-full rounded-[0.25rem] bg-[#F4F4F5] px-4 outline-none", props.className)}
    />
  );
};

export default TextInput;
