import Button from "./components/Button";
import TextInput from "./components/TextInput";
import { TimeSelect } from "./components/TimeSelect";
import TrashButton from "./components/TrashButton";

import "./index.css";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <TrashButton />
      <Button />
      <TextInput />
      <TimeSelect />
    </div>
  );
}

export default App;
