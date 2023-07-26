import Image from "next/image";

export default function LargeContainer({ text, image }) {
  return (
    <div className="grid grid-rows-2 bg-white border border-black/50 rounded-[30px] drop-shadow-xl lg:max-h-max p-12 place-items-center">
      <div>
        <p className="font-['Arsenal'] font-bold text-xl">{text.title}</p>
        <br></br>
        <p className="font-['Arsenal'] text-md self-stretch">{text.text}</p>
      </div>
      <div className="w-full flex justify-center">
        <Image src={image} alt={text.title} className="h-64 w-auto" />
      </div>
    </div>
  );
}
