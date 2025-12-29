import { AgendaCalendar } from "../components/AgendaCalendar";

export default function Agenda() {
  return (
    <div className="flex flex-col w-full justify-around">
      <div className="flex h-30 w-full justify-around items-center ">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-100 text-[24px] font-bold">Your Agenda</h1>
          <p className="text-gray-300 text-sm">
            Check your scheduled haircuts by day.
          </p>
        </div>
        <AgendaCalendar />
      </div>

      <div>
        <h1 className="text-gray-200">testing</h1>
      </div>
    </div>
  );
}
