import TrashIcon from "../assets/icons/trash.svg?react";

export default function TrashButton() {
  return (
    <button className="cursor-pointer">
      <TrashIcon className="w-4 h-4 fill-(--color-yellow) hover:fill-(--color-yellow-dark)" />
    </button>
  );
}
