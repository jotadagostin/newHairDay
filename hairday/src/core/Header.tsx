import Logo from "../assets/image/Logo.svg";

export default function Header() {
  return (
    <div className="absolute h-12 w-35 flex items-center px-4 bg-gray-600 rounded-b-md left-0 top-0">
      <img src={Logo} alt="" className="h-10" />
    </div>
  );
}
