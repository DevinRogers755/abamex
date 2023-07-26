import type { Metadata } from 'next'
import LargeContainer from '@/components/LargeContainer'
import { generacionElectrica, manufacturaSHC, metales, proceso, productosForestales, productosSHC } from '@/assets/texts'
import ProductosSHC from '@/assets/productosSHC.png'
import GeneracionElectrica from '@/assets/generacionElectrica.png'
import ManufacturaSHC from '@/assets/manufacturaSHC.png'
import Proceso from '@/assets/proceso.png'
import ProductosForestales from '@/assets/productosForestales.png'
import Metales from '@/assets/metales.png'

export const metadata: Metadata = {
    title: 'Mobil SHC | Lubricantes Industriales Abamex',
}

export default function MobilSHC() {
    return (
        <div>
            <img src="/mobilSHC.png" alt="MobilSHC" className="mt-10 w-full h-max-52 object-cover" />
            <div className='flex flex-col space-y-6 justify-center items-center px-6 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <LargeContainer text={productosSHC} image={ProductosSHC} />
                    <LargeContainer text={generacionElectrica} image={GeneracionElectrica} />
                    <LargeContainer text={manufacturaSHC} image={ManufacturaSHC} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <LargeContainer text={proceso} image={Proceso} />
                    <LargeContainer text={productosForestales} image={ProductosForestales} />
                    <LargeContainer text={metales} image={Metales} />
                </div>
            </div>
        </div>
    )
}