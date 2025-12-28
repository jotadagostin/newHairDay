import Logo from "../assets/image/Logo.svg";

export default function Header() {
  return (
    <div className="h-16 flex items-center px-4 bg-gray-600 rounded-t-md">
      <img src={Logo} alt="" className="h-10" />
    </div>
  );
}
