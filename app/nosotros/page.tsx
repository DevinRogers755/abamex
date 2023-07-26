import Image from "next/image"
import type { Metadata } from 'next'
import Logo from '@/assets/SVGLogoNoBottomLetters.png'
import Distribuidor from '@/assets/DistribuidorAutorizado.png'
import ExpandedText from '@/components/ExpandedText'
import { mision, vision, nosotrosPoints, nosotrosSecondText, nosotrosThirdText, nosotrosFourthText } from "@/assets/texts"
import Mision from '@/assets/mision.png'
import Vision from '@/assets/vision.png'
import Valores from '@/assets/valores.png'
import Servicios from '@/assets/ServiciosAdicionales.png'
import Politicas from '@/assets/Politicas.png'

export const metadata: Metadata = {
    title: 'Nosotros | Lubricantes Industriales Abamex',
  }

export default function Nosotros() {
    return (
        <div>
            {/* Carousel */}
            <div className="relative mt-10 h-48 lg:h-64 w-full">
                <img src="/nosotros.png" alt="Nosotros" className="absolute w-full h-48 lg:h-64 z-10 object-cover brightness-50" />
                <div className="absolute w-full h-48 lg:h-64 z-20 flex flex-col justify-center items-center">
                    <div className="flex space-x-4 items-center">
                        <Image src={Logo} alt="Logo" className="w-auto h-16 lg:h-auto" />
                        <Image src={Distribuidor} alt="Distribuidor" className="w-auto h-8 lg:h-20" />
                    </div>
                    <p className="text-center font-['Arsenal'] text-white font-bold text-md lg:text-2xl">
                        El Distribuidor de Lubricantes de mayor éxito para<br></br>los mercados industrial y automotriz.
                    </p>
                </div>
            </div>
            {/* About Us */}
            <div className='w-full py-8 lg:py-16 px-8 lg:px-24 flex flex-col'>
                <p className="font-['Arsenal'] font-bold text-xl">Abamex | Nosotros</p>
                <br></br>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 px-2"><ExpandedText text={mision} image={Mision} /></div>
                    <div className="w-full lg:w-1/2 px-2"><ExpandedText text={vision} image={Vision} /></div>
                </div>
            </div >
            {/* Valores */}
            <div className='w-full py-8 lg:py-16 px-8 lg:px-24 flex flex-col lg:flex-row justify-between items-center'>
                <div className="flex flex-col">
                    <p className="font-['Arsenal'] font-bold text-xl">Nuestros Valores</p>
                    <br></br>
                    <ul className="font-['Arsenal'] text-md self-stretch">{nosotrosPoints.map((point) => { return <li>{point}</li> })}</ul>
                </div>
                <Image src={Valores} alt="Valores" className="py-4 lg:py-0" />
            </div >
            {/* Servicios */}
            <div className='relative w-full pt-8 lg:pt-16 lg:pb-36 px-8 lg:px-24 flex flex-col lg:flex-row items-center'>
                <div className="flex flex-col lg:w-[80%]">
                    <p className="font-['Arsenal'] font-bold text-xl">Servicios Adicionales</p>
                    <br></br>
                    <p className="font-['Arsenal'] text-md self-stretch clear-none">{nosotrosSecondText}</p>
                </div>
                <Image src={Servicios} alt="Servicios Adicionales" className="float-left lg:w-[20%] w-56 aspect-auto py-4 lg:py-0" />
            </div >
            {/* Valor */}
            <div className='w-full py-8 lg:py-16 px-8 lg:px-24 flex flex-col'>
                <p className="font-['Arsenal'] font-bold text-xl">Valor agregado</p>
                <br></br>
                <p className="font-['Arsenal'] text-md self-stretch">{nosotrosThirdText}</p>
            </div >
            {/* Politica */}
            <div className='w-full py-8 lg:py-16 px-8 lg:px-24 flex flex-col lg:flex-row justify-around items-center'>
                <Image src={Politicas} alt="Servicios Adicionales" className="h-40 w-auto py-4 lg:py-0" />
                <div className="flex flex-col lg:w-[80%]">
                    <p className="font-['Arsenal'] font-bold text-xl">Política de Calidad</p>
                    <br></br>
                    <p className="font-['Arsenal'] text-md self-stretch">{nosotrosFourthText}</p>
                </div>
            </div >
        </div>
    )
}
