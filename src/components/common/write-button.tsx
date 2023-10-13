type WriteButtonProps = {
  color: string;
  onClick: () => void;
};

const WriteButton = ({ color, onClick }: WriteButtonProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-[${color}]  fixed  bottom-[2.25rem] right-[1.25rem] h-[3rem] w-[3rem] rounded-[50%]`}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
export default WriteButton;
