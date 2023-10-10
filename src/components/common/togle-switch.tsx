interface Props {
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

const ToggleSwitch = ({ checked, onToggle }: Props) => {
  return (
    <label className="relative inline-flex  items-center ">
      <input
        type="checkbox"
        value=""
        className="peer sr-only "
        checked={checked}
        onChange={e => onToggle(e.target.checked)}
      />
      <div className="peer h-[1.25rem] w-[2.25rem] rounded-full bg-[#E6E8EC] after:absolute after:left-[0.125rem] after:top-[0.125rem] after:h-[1rem] after:w-[1rem] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all  after:content-['']  peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-orange-500 "></div>
    </label>
  );
};

export default ToggleSwitch;
