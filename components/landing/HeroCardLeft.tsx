import React from 'react'
import appData from '../../state/initial/appData';
import LeftBottomUnderlinedText from '../ui/LeftBottomUnderlinedText';
import Button from '../io/Button';



interface HeroCardLeftProps {

}

const HeroCardLeft = (props: HeroCardLeftProps) => {
    return (
        <div className={'w-fit h-full flex flex-col justify-between items-start py-4'}>
            <LeftBottomUnderlinedText text={appData.landing.heroMainTitle} textClasses="w-fit text-2xl font-bold" underlineColor={"#fff"} />
            {appData.landing.heroSubTitle && <div className={'w-full pl-3 mt-2 text-xl'}>
                {appData.landing.heroSubTitle}
            </div>}
            {appData.landing.heroCardBody && <div className={'w-full mt-2'}>
                {appData.landing.heroCardBody}
            </div>}
            <div className={'w-full flex flex-row justify-end items-center'}>
                <Button
                    label="Sign Up"
                    severity="secondary"
                    raised
                    outlined
                />
            </div>
        </div>
    )
}



export default HeroCardLeft;
