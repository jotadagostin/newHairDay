import Form from "./Form";
import Header from "./Header";
import type { Appointment } from "../types/appointment";

type ScheduleProps = {
  selectedDate: string;
  onDateChange: (d: string) => void;
  onCreate: (a: Appointment) => void;
  appointments?: Appointment[];
};

export default function Schedule({
  selectedDate,
  onDateChange,
  onCreate,
  appointments,
}: ScheduleProps) {
  return (
    <div
      className="relative  w-full 
      lg:w-105
      min-h-screen 
      bg-gray-700 
      mt-2 
      ml-0 
      lg:ml-2 
      border 
      rounded-md 
      flex 
      flex-col 
      items-center
      relative"
    >
      <div className="px-8 py-5  mt-10 w-full max-w-md bg-gray-700 rounded-md flex flex-col">
        <Header />
        <Form
          selectedDate={selectedDate}
          onDateChange={onDateChange}
          onCreate={onCreate}
          appointments={appointments ?? []}
        />
      </div>
    </div>
  );
}
