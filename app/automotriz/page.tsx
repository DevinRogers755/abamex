import type { Metadata } from 'next'
import SquaredContainer from '@/components/SquaredContainter'
import { automotrizFirstText, lubricantesAutomotrices, lubricantesMotocicletas } from '@/assets/texts'
import LubricantesAutomotrices from '@/assets/lubricantesAutomotrices.png'
import LubricantesMotocicletas from '@/assets/lubricantesMotocicletas.png'
import ContactUs from '@/components/ContactUs'

export const metadata: Metadata = {
    title: 'Automotriz | Lubricantes Industriales Abamex',
}

export default function Automotriz() {
    return (
        <div>
            <img src="/automotriz.png" alt="Automotriz" className="mt-10 mb-6 w-full h-max-52 object-cover" />
            <div className='w-full py-6 lg:py-12 px-8 lg:px-24 flex flex-col'>
                <p className="font-['Arsenal'] font-bold text-xl">Mobil 1</p>
                <br></br>
                <p className="font-['Arsenal'] text-md self-stretch">{automotrizFirstText}</p>
            </div >
            <div className='space-y-20 py-12'>
                <SquaredContainer text={lubricantesAutomotrices} image={LubricantesAutomotrices} imageSide="left" />
                <SquaredContainer text={lubricantesMotocicletas} image={LubricantesMotocicletas} imageSide="right" />
            </div>
            <ContactUs />
        </div>
    )
}