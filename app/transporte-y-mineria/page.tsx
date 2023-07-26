import type { Metadata } from 'next'
import SquaredContainer from '@/components/SquaredContainter'
import { aceites, grasas, lubricantes, lubricantes2 } from '@/assets/texts'
import Lubricantes from '@/assets/lubricantes.png'
import Aceite from '@/assets/aceites.png'
import Grasas from '@/assets/grasas.png'
import Lubricantes2 from '@/assets/lubricantes2.png'

export const metadata: Metadata = {
    title: 'Transporte y Minería | Lubricantes Industriales Abamex',
}

export default function Transporte() {
    return (
        <div>
            <img src="/transporte.png" alt="Transporte" className="mt-10 w-full h-max-52 object-cover" />
            <div className='space-y-20 py-20'>
                <SquaredContainer text={aceites} image={Aceite} imageSide="left" />
                <SquaredContainer text={lubricantes} image={Lubricantes} imageSide="right" />
                <SquaredContainer text={grasas} image={Grasas} imageSide="left" />
                <SquaredContainer text={lubricantes2} image={Lubricantes2} imageSide="right" />
            </div>
        </div>
    )
}