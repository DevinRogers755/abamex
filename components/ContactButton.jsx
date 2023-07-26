import Image from "next/image";
import EnvelopeFill from "@/assets/EnvelopeFill.svg";

export default function ContactButton() {
  return (
    <button
      type="button"
      className="bg-[#D9D9D9] rounded-[10px] flex items-center h-12 py-3 px-6 space-x-2"
    >
      <Image src={EnvelopeFill} className="w-8" alt="Envelope" />
      <p className="text-xl">Contacto</p>
    </button>
  );
}
