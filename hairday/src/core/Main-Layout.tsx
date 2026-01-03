import { useState } from "react";
import Agenda from "./Agenda";
import Schedule from "./Schedule";
import type { Appointment } from "../types/appointment";

export default function MainLayout() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function addAppointment(appointment: Appointment) {
    setAppointments((prev) => [...prev, appointment]);
  }

  function removeAppointment(id: string) {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  }
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen gap-2">
      <Schedule
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onCreate={addAppointment}
        appointments={appointments}
      />
      <Agenda
        selectedDate={selectedDate}
        appointments={appointments}
        onRemove={removeAppointment}
        onDateChange={setSelectedDate}
      />
    </div>
  );
}
