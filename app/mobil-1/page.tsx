import type { Metadata } from 'next'
import LargeContainer from '@/components/LargeContainer'
import { generacionElectrica2, mobil1Productos, proceso2, productosForestales2 } from '@/assets/texts'
import Mobil1Productos from '@/assets/mobil1Productos.png'
import GeneracionElectrica2 from '@/assets/generacionElectrica2.png'
import Proceso2 from '@/assets/proceso2.png'
import ProductosForestales2 from '@/assets/productosForestales2.png'

export const metadata: Metadata = {
    title: 'Mobil 1 | Lubricantes Industriales Abamex',
}

export default function Mobil1() {
    return (
        <div>
            <div className="hidden lg:flex relative mt-10 mb-6 h-52 w-full">
                <img src="/mobil1.png" alt="Mobil1" className="absolute w-full h-52 z-10 object-cover" />
            </div>
            <img src="/mobil1.png" alt="Mobil1" className="lg:hidden mt-10 mb-6 w-full h-max-52 object-cover" />
            <p className="text-center font-['Arsenal'] font-bold text-sm lg:text-xl text-black/70">CELEBRANDO CUATRO DÉCADAS. UN ACEITE EXCEPCIONAL. UNA GRAN HISTORIA.</p>
            <div className='flex flex-col space-y-6 justify-center items-center px-6 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <LargeContainer text={mobil1Productos} image={Mobil1Productos} />
                    <LargeContainer text={generacionElectrica2} image={GeneracionElectrica2} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <LargeContainer text={proceso2} image={Proceso2} />
                    <LargeContainer text={productosForestales2} image={ProductosForestales2} />
                </div>
            </div>
        </div>
    )
}