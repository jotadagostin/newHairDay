import TrashIcon from "../assets/icons/trash.svg?react";

type TrashButtonProps = {
  onClick?: () => void;
};

export default function TrashButton({ onClick }: TrashButtonProps) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <TrashIcon className="w-4 h-4 fill-(--color-yellow) hover:fill-(--color-yellow-dark)" />
    </button>
  );
}
