import Button from "./components/Button";
import TextInput from "./components/TextInput";
import TrashButton from "./components/TrashButton";

import "./index.css";

function App() {
  return (
    <div className="flex flex-col">
      <TrashButton />
      <Button />
      <TextInput />
    </div>
  );
}

export default App;
