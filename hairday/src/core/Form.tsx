import { useState } from "react";
import Button from "../components/Button";
import { Calendar } from "../components/Calendar";
import TextInput from "../components/TextInput";
import { TimeSelect } from "../components/TimeSelect";
import type { Appointment } from "../types/appointment";

type FormProps = {
  selectedDate: string;
  onDateChange: (d: string) => void;
  onCreate: (a: Appointment) => void;
  appointments?: Appointment[];
};

export default function Form({
  selectedDate,
  onDateChange,
  onCreate,
  appointments,
}: FormProps) {
  const morningHours = ["08:00", "09:00", "10:00", "11:00"];

  const afternoonHours = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  const eveningHours = ["19:00", "20:00", "21:00"];

  const [time, setTime] = useState<string | null>(null);
  const [client, setClient] = useState<string>("");

  const taken = new Set(
    (appointments ?? [])
      .filter((a) => a.date === selectedDate)
      .map((a) => a.time)
  );

  function handleCreate() {
    if (!time || !client.trim())
      return alert("Select time and enter client name");

    const appointment: Appointment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      date: selectedDate,
      time,
      client: client.trim(),
    };

    onCreate(appointment);
    setTime(null);
    setClient("");
  }

  return (
    <div className="flex flex-col gap-6 px-5 py-2">
      <div className="max-w-md w-full">
        <h1 className="text-gray-100 bold text-xl font-bold pb-2">
          Schedule your appointment
        </h1>
        <p className="text-gray-300 text-sm ">
          Select the date and time, and enter the client's name to create the
          appointment.
        </p>
      </div>
      <div className="pt-6">
        <Calendar value={selectedDate} onChange={onDateChange} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-md text-gray-200 font-bold ">Hours</h1>
        <div className="pt-2">
          <h2 className="text-sm text-gray-300">Morning</h2>
          <div className="flex gap-2 pt-2 flex-wrap ">
            {morningHours.map((hour) => (
              <TimeSelect
                key={hour}
                time={hour}
                onSelect={setTime}
                selected={time === hour}
                disabled={taken.has(hour)}
              />
            ))}
          </div>
        </div>
        <div className="pt-2">
          <h2 className="text-sm text-gray-300">Afternoon</h2>
          <div className="flex gap-2 pt-2 flex-wrap">
            {afternoonHours.map((hour) => (
              <TimeSelect
                key={hour}
                time={hour}
                onSelect={setTime}
                selected={time === hour}
                disabled={taken.has(hour)}
              />
            ))}
          </div>
        </div>
        <div className="pt-2">
          <h2 className="text-sm text-gray-300">Evening</h2>
          <div className="flex gap-2 pt-2">
            {eveningHours.map((hour) => (
              <TimeSelect
                key={hour}
                time={hour}
                onSelect={setTime}
                selected={time === hour}
                disabled={taken.has(hour)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-wrap">
        <h1 className="text-md text-gray-200 font-bold ">Client</h1>
        <TextInput value={client} onChange={(v) => setClient(v)} />
        <Button
          onClick={handleCreate}
          disabled={!time || !client.trim() || (time ? taken.has(time) : false)}
        />
      </div>
    </div>
  );
}
