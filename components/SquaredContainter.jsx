import Image from "next/image";

export default function SquaredContainter({ text, image, imageSide }) {
  return (
    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
      <div
        className={`bg-[#D9D9D9] drop-shadow-xl min-h-[256px] flex flex-col justify-center lg:w-[70%] px-12 py-4 ${
          imageSide == "left"
            ? "lg:order-first"
            : imageSide == "right"
            ? "lg:order-last"
            : null
        }`}
      >
        <p className="font-['Arsenal'] font-bold text-xl">{text.title}</p>
        <br></br>
        <p className="font-['Arsenal'] text-md self-stretch">{text.text}</p>
      </div>
      <div className="lg:w-[30%] flex justify-center sm:w-1/2 w-full">
        <div className="drop-shadow-2xl w-full h-auto lg:h-64 lg:w-64">
          <Image src={image} alt={text.title} className="w-full h-auto lg:h-64 lg:w-64" />
        </div>
      </div>
    </div>
  );
}
