import Form from "./Form";
import Header from "./Header";

export default function Schedule() {
  return (
    <div className="w-125 h-170 bg-gray-700 mt-2 ml-2 border rounded-md flex flex-col items-center ">
      <Header />
      <Form />
    </div>
  );
}
