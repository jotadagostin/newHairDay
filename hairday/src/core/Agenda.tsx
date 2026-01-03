import { AgendaCalendar } from "../components/AgendaCalendar";
import MorningIcon from "../assets/icons/morning.svg?react";
import TrashButton from "../components/TrashButton";
import type { Appointment } from "../types/appointment";

export interface AgendaProps {
  selectedDate: string;
  appointments: Appointment[];
  onRemove: (id: string) => void;
  onDateChange?: (d: string) => void;
}

export default function Agenda({
  selectedDate,
  appointments,
  onRemove,
  onDateChange,
}: AgendaProps) {
  const todays = appointments.filter((a) => a.date === selectedDate);

  function renderSlot(hour: string, item?: Appointment) {
    return (
      <div
        className="flex justify-between items-center p-4 border-t border-gray-600"
        key={hour}
      >
        <span className="text-gray-200 text-md">{hour}</span>
        <p className="text-gray-200 text-md">{item ? item.client : "-"}</p>
        {item ? (
          <TrashButton onClick={() => onRemove(item.id)} />
        ) : (
          <div className="w-4" />
        )}
      </div>
    );
  }

  // Group appointments by time for today's date
  const byTime = new Map<string, Appointment>();
  todays.forEach((a) => byTime.set(a.time, a));

  const morning = ["08:00", "09:00", "10:00", "11:00"];
  const afternoon = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  const evening = ["19:00", "20:00", "21:00"];

  return (
    <div className="flex flex-col w-full gap-6 px-5 mt-6 lg:mt-18">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-100 text-2xl font-bold">Your Agenda</h1>
          <p className="text-gray-300 text-sm">
            Check your scheduled haircuts by day.
          </p>
        </div>

        <AgendaCalendar value={selectedDate} onChange={onDateChange} />
      </div>

      <div className="w-full border border-gray-600 rounded-md overflow-hidden">
        <div className="flex justify-between items-center p-2 bg-gray-800">
          <div className="flex items-center gap-3">
            <MorningIcon className="w-4 h-4 fill-(--color-yellow-dark)" />
            <p className="text-gray-300 text-sm">Morning</p>
          </div>

          <p className="text-gray-300 text-sm">08h–11h</p>
        </div>

        {morning.map((h) => renderSlot(h, byTime.get(h)))}
      </div>

      <div className="w-full border border-gray-600 rounded-md overflow-hidden">
        <div className="flex justify-between items-center p-2 bg-gray-800">
          <div className="flex items-center gap-3">
            <MorningIcon className="w-4 h-4 fill-(--color-yellow-dark)" />
            <p className="text-gray-300 text-sm">Afternoon</p>
          </div>

          <p className="text-gray-300 text-sm">12h–17h</p>
        </div>

        {afternoon.map((h) => renderSlot(h, byTime.get(h)))}
      </div>

      <div className="w-full border border-gray-600 rounded-md overflow-hidden">
        <div className="flex justify-between items-center p-2 bg-gray-800">
          <div className="flex items-center gap-3">
            <MorningIcon className="w-4 h-4 fill-(--color-yellow-dark)" />
            <p className="text-gray-300 text-sm">Evening</p>
          </div>

          <p className="text-gray-300 text-sm">19h–21h</p>
        </div>

        {evening.map((h) => renderSlot(h, byTime.get(h)))}
      </div>
    </div>
  );
}
