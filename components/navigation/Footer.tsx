import { Card } from 'primereact/card';
import React from 'react'
import FooterColumn, { FooterColumnProps } from './FooterColumn';
import FooterSocialMedia from './FooterSocialMediaCol';

const columns: FooterColumnProps[] = [
    {
        title: "About Us",
        colNumber: 1,
        links: [
            {
                url: "/aboutUs",
                label: "About Us"
            },
            {
                url: "/sellerBenefts",
                label: "Seller Benefits"
            },
            {
                url: "/faq",
                label: "FAQ"
            },
        ]
    },
    {
        title: "Information",
        colNumber: 2,
        links: [
            {
                url: "/inThePress",
                label: "In the press"
            },
            {
                url: "/support",
                label: "Support"
            },
        ]
    },
    {
        title: "Legal",
        colNumber: 3,
        links: [
            {
                url: "/termsOfUse",
                label: "Terms of use"
            },
            {
                url: "/privacy",
                label: "Privacy"
            },
        ]
    },
]

const Footer = () => {
    return (
        <div className={'px-4 py-6 mx-0 mb-0 mt-8 w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-start gap-2 bg-[--highlight-bg] text-[--highlight-text-color]'}>
            {columns.map((c, i) => <FooterColumn {...c} key={`footer-column-${i}`} />)}
            <FooterSocialMedia />
        </div>
    )
}



export default Footer;
