import type { Metadata } from 'next'
import Carousel from '@/components/Carousel'
import { homeFirstText } from '@/assets/texts'
import ContactUs from '@/components/ContactUs'

export const metadata: Metadata = {
  title: 'Abamex | Lubricantes Industriales Abamex',
}

export default function Home() {
  const brands = ['/brands-1.png', '/brands-2.png', '/brands-3.png', '/brands-4.png', '/brands-5.png', '/brands-6.png', '/brands-7.png']
  return (
    <>
      <div className='relative z-40'><Carousel /></div>
      <div className='w-full py-8 lg:py-16 px-8 lg:px-24 flex flex-col'>
        <p className="font-['Arsenal'] font-bold text-xl">Lubricantes Industriales Abamex SA de CV</p>
        <br></br>
        <p className="font-['Arsenal'] text-md self-stretch">{homeFirstText}</p>
      </div >
      <div className='space-y-4'>
        <p className="text-center font-['Arsenal'] font-bold text-xl">Nuestros Clientes</p>
        <div className='bg-[#CCCCCC] flex justify-around p-4 flex-wrap'>
          {brands.map((brand) => {
            return <img key={brand} src={brand} alt="Brand" className='h-16 lg:h-20 p-2 lg:p-0' />
          })}
        </div>
      </div>
      <ContactUs />
    </>
  )
}
