import type { Metadata } from 'next'
import SquaredContainer from '@/components/SquaredContainter'
import { alimenticia, energia, manufactura, papel } from '@/assets/texts'
import Manufactura from '@/assets/manufactura.png'
import Papel from '@/assets/papel.png'
import Alimenticia from '@/assets/alimenticia.png'
import Energia from '@/assets/energia.png'

export const metadata: Metadata = {
    title: 'Industria | Lubricantes Industriales Abamex',
}

export default function Industria() {
    return (
        <div>
            <img src="/industria.png" alt="Industria" className="mt-10 mb-6 w-full h-max-52 object-cover" />
            <p className="text-center font-['Arsenal'] font-bold text-sm lg:text-xl text-black/70">TENEMOS AMPLIA GAMA DE PRODUCTOS DESTINADOS AL ÁREA INDUSTRIAL Y MANUFACTURERA</p>
            <div className='space-y-20 py-6 lg:py-20'>
                <SquaredContainer text={manufactura} image={Manufactura} imageSide="left" />
                <SquaredContainer text={papel} image={Papel} imageSide="right" />
                <SquaredContainer text={alimenticia} image={Alimenticia} imageSide="left" />
                <SquaredContainer text={energia} image={Energia} imageSide="right" />
            </div>
        </div>
    )
}
