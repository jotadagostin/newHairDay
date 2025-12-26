import Logo from "../assets/image/Logo.svg";

export default function Header() {
  return (
    <div className=" w-full h-16">
      <img
        src={Logo}
        alt=""
        className="h-14 bg-gray-600  rounded-br-md  absolute top-0 left-0"
      />
    </div>
  );
}
