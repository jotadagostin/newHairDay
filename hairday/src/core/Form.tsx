import Button from "../components/Button";
import { Calendar } from "../components/Calendar";
import TextInput from "../components/TextInput";
import { TimeSelect } from "../components/TimeSelect";

export default function Form() {
  return (
    <div className="flex flex-col gap-6 p-5">
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
      <div className="flex flex-col gap-4">
        <h1 className="text-md text-gray-200 font-bold ">Hours</h1>
        <div className="pt-2">
          <h2 className="text-sm text-gray-300">Morning</h2>
          <div className="flex gap-2 pt-2">
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
          </div>
        </div>
        <div className="pt-2">
          <h2 className="text-sm text-gray-300">Afternoon</h2>
          <div className="flex gap-2 pt-2 flex-wrap">
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
          </div>
        </div>
        <div className="pt-2">
          <h2 className="text-sm text-gray-300">Evening</h2>
          <div className="flex gap-2 pt-2">
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
            <TimeSelect />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-md text-gray-200 font-bold ">Hours</h1>
        <TextInput />
        <Button />
      </div>
    </div>
  );
}
