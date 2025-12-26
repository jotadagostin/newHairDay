import { Calendar } from "../components/Calendar";

export default function Form() {
  return (
    <div>
      <div className=" w-85">
        <h1 className="text-gray-100 bold text-xl font-bold pb-2">
          Schedule your appointment
        </h1>
        <p className="text-gray-300 text-sm ">
          Select the date and time, and enter the client's name to create the
          appointment.
        </p>
      </div>
      <div className="pt-6">
        <Calendar />
      </div>
    </div>
  );
}
