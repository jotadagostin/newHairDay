type TimeSelectProps = {
  time: string;
  onSelect?: (time: string) => void;
  selected?: boolean;
  disabled?: boolean;
};

export function TimeSelect({
  time,
  onSelect,
  selected,
  disabled,
}: TimeSelectProps) {
  return (
    <div>
      <button
        onClick={() => !disabled && onSelect?.(time)}
        disabled={disabled}
        aria-disabled={disabled}
        className={
          "h-12 flex items-center justify-center border text-gray-200 border-gray-500 rounded-lg px-4 focus:outline-none text-sm " +
          (disabled
            ? " bg-gray-700 opacity-60 cursor-not-allowed"
            : selected
            ? " bg-(--color-yellow) text-gray-900 border-(--color-yellow-dark)"
            : " bg-gray-600 hover:bg-gray-500")
        }
      >
        {time}
      </button>
    </div>
  );
}
