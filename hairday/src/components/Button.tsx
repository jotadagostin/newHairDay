type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ onClick, disabled }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full  bg-(--color-yellow) border hover:border-(--color-yellow-light) rounded-lg text-gray-900 text-sm py-4 px-34 font-bold cursor-pointer transition-colors disabled:opacity-60"
      >
        SCHEDULE
      </button>
    </>
  );
}
