import ContactButton from '@/components/ContactButton'

export default function ContactUs() {
  return (
    <div className="relative h-40 w-full my-10">
      <img
        src="/contact-us.png"
        alt="Contact Us Background"
        className="absolute w-full z-10 h-40 object-cover brightness-50"
      />
      <div className="absolute w-full h-40 z-20 flex flex-col space-y-2 justify-center items-center">
        <p className="font-['Arsenal'] text-white font-bold text-2xl">
          ¿Tienes dudas? Contáctanos
        </p>
        <ContactButton />
      </div>
    </div>
  );
}
