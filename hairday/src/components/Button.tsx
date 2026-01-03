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
        className="w-full bg-(--color-yellow) border hover:border-(--color-yellow-light) rounded-lg text-gray-900 text-base py-3 px-6 font-bold cursor-pointer transition-colors disabled:opacity-60"
      >
        SCHEDULE
      </button>
    </>
  );
}
