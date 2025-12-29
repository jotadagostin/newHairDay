type TimeSelectProps = {
  time: string;
  onSelect?: (time: string) => void;
};

export function TimeSelect({ time, onSelect }: TimeSelectProps) {
  return (
    <div>
      <button
        onClick={() => onSelect?.(time)}
        className="border bg-gray-600 text-gray-200 border-gray-500 rounded-lg px-5 py-1  hover:bg-gray-500   focus:border-yellow-400
        focus:outline-none focus:bg-gray-600"
      >
        {time}
      </button>
    </div>
  );
}
