import React from 'react'
import Button from '../io/Button';
import Link from 'next/link';



interface LandingDevSectionProps {

}

const LandingDevSection = (props: LandingDevSectionProps) => {
    return (
        <div className={'text-2xl'}>
            <div className={''}>
                For the development process only:
            </div>
            <Link href="/testing">
                <Button label="Development Page" />
            </Link>
        </div>
    )
}



export default LandingDevSection;
