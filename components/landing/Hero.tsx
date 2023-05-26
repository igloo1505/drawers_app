import React from 'react'
import GenericCard from '../ui/Card';
import HeroCardLeft from './HeroCardLeft';
import HeroCardRight from './HeroCardRight';



interface HeroSectionProps {

}

const HeroSection = (props: HeroSectionProps) => {
    return (
        <GenericCard extraClasses={'w-screen'} extraStyles={{
            backgroundColor: "var(--surface-600)",
            borderRadius: 0
        }}>
            <div className={'w-full h-fit grid px-4 py-3 gap-8 text-[#fff] hero-grid'}>
                <HeroCardLeft />
                <HeroCardRight />
            </div>
        </GenericCard>
    )
}



export default HeroSection;
