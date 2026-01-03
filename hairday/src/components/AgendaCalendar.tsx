import { useRef } from "react";
import CalendarIcon from "../assets/icons/calendar.svg?react";

type AgendaCalendarProps = {
  value?: string;
  onChange?: (v: string) => void;
};

export function AgendaCalendar({ value, onChange }: AgendaCalendarProps) {
  const dateRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    dateRef.current?.showPicker?.();
    dateRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center gap-2 w-45">
      <div className="relative ">
        <CalendarIcon
          onClick={handleIconClick}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer fill-amber-300"
        />

        <input
          ref={dateRef}
          type="date"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="border text-gray-200 border-gray-500 rounded-md pl-12 pr-4 py-2 w-full"
        />
      </div>
    </div>
  );
}
