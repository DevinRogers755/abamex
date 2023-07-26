import type { Metadata } from 'next'
import LargeContainer from '@/components/LargeContainer'
import { mobilAltoKilometraje, mobilSuperAntiFriction, mobilSuperExtengine, mobilSuperMoto4T, mobilSuperSynthetic, mobilSuperTRCPro } from '@/assets/texts'
import MobilSuperSynthetic from '@/assets/mobilSuperSynthetic.png'
import MobilSuperAntiFriction from '@/assets/mobilSuperAntiFriction.png'
import MobilSuperExtengine from '@/assets/mobilSuperExtengine.png'
import MobilSuperTRCPro from '@/assets/mobilSuperTRCPro.png'
import MobilAltoKilometraje from '@/assets/mobilAltoKilometraje.png'
import MobilSuperMoto4T from '@/assets/mobilSuperMoto4T.png'

export const metadata: Metadata = {
    title: 'Mobil Super | Lubricantes Industriales Abamex',
}

export default function MobilSuper() {
    return (
        <div>
            <div className="relative mt-10 h-52 w-full">
                <img src="/mobilSuper.png" alt="MobilSuper" className="absolute w-full h-52 z-10 object-cover" />
            </div>
            <div className='flex flex-col space-y-6 justify-center items-center px-6 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <LargeContainer text={mobilSuperSynthetic} image={MobilSuperSynthetic} />
                    <LargeContainer text={mobilSuperAntiFriction} image={MobilSuperAntiFriction} />
                    <LargeContainer text={mobilSuperExtengine} image={MobilSuperExtengine} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <LargeContainer text={mobilSuperTRCPro} image={MobilSuperTRCPro} />
                    <LargeContainer text={mobilAltoKilometraje} image={MobilAltoKilometraje} />
                    <LargeContainer text={mobilSuperMoto4T} image={MobilSuperMoto4T} />
                </div>
            </div>
        </div>
    )
}