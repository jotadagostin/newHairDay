import Agenda from "./Agenda";
import Schedule from "./Schedule";

export default function MainLayout() {
  return (
    <div className="flex gap-2">
      <Schedule />
      <Agenda />
    </div>
  );
}
