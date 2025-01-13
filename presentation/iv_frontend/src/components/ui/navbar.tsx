import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-2 bg-black flex justify-between">
      <Image src={'/logo.png'} width={46} height={46} alt="asasdas" />
    </nav>
  );
}
