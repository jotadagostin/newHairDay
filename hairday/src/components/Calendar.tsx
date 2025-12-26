import { useRef } from "react";
import CalendarIcon from "../assets/icons/calendar.svg?react";

export function Calendar() {
  const dateRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    dateRef.current?.showPicker?.();
    dateRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-md text-gray-200">Date</label>

      <div className="relative">
        {/* Ícone posicionado dentro do input */}
        <CalendarIcon
          onClick={handleIconClick}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer fill-amber-300"
        />

        <input
          ref={dateRef}
          type="date"
          className="border text-gray-200 border-gray-500 rounded-md pl-12 pr-4 py-2 w-full"
        />
      </div>
    </div>
  );
}
