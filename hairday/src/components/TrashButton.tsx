import trashIcon from "../assets/icons/trash.svg";

export default function TrashButton() {
  return (
    <button className="cursor-pointer">
      <img src={trashIcon} alt="" className="" />
    </button>
  );
}
