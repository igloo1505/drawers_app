import React from 'react'
import clsx from 'clsx'


/* const titleText = ["anty", "latform"] */
const titleText = ["xxx", "xxxxxxx"]


const LogoP = ({ initialChar, charList, idx }: { initialChar: string, charList: string, idx: number }) => {
    return (
        <div className={clsx('text-2xl', idx === 1 && 'translate-x-3 -translate-y-3')}>
            <span className={'font-semibold text-4xl'}>{initialChar}</span>
            {charList.split("").map((l, i) => {
                return (
                    <span key={`title-letter-${i}`}>{l}</span>
                )
            })
            }
        </div>
    )
}


const NavbarLogoAsText = () => {
    return (
        <div className={'flex flex-col gap-0 justify-start items-start translate-y-1'}>
            <LogoP initialChar="P" charList={titleText[0]} idx={0} />
            <LogoP initialChar="P" charList={titleText[1]} idx={1} />
        </div>
    )
}



export default NavbarLogoAsText;
