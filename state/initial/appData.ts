import { IconType } from "react-icons/lib"
import { AppStatItemType } from "../../types/UITypes"
import { numberToDisplayString } from "../../utils/formatting"
import { FaDollarSign, FaUsers, FaCommentDots, FaImages } from 'react-icons/fa'

export interface AppDataType {
    authentication: {
        loginPageHeading: string,
        callToLoginCardHeader: string,
        callToLoginCardBody: string,
    },
    landing: {
        heroMainTitle: string,
        heroSubTitle: string,
        heroCardBody: string
    },
    appStats: {
        items: AppStatItemType[]
    }
}


const appData = {
    authentication: {
        loginPageHeading: "Member Login",
        callToLoginCardHeader: "Not a Member yet",
        callToLoginCardBody: "Registering is fast, simple, and secure.",
    },
    landing: {
        heroMainTitle: "Dignissim nisl vulputate condimentum erat.",
        heroSubTitle: "Vitae cursus nulla dui justo morbi maximus condimentum at consectetur. ",
        heroCardBody: "Et nulla ac vestibulum amet auctor platea nibh suscipit dignissim, elementum sit eleifend aliquet diam magna pretium ac efficitur efficitur in in faucibus. Pretium condimentum ligula. Gravida platea posuere placerat et non. Eget bibendum dolor arcu massa in amet nunc urna ante neque viverra, dignissim nisl quisque dui sem convallis, donec porttitor rhoncus nullam dolor. Diam non tincidunt eget semper diam suscipit nibh,. Volutpat quisque bibendum sit hac a suscipit ultrices vel condimentum quis, suscipit cras nibh vulputate eleifend, id convallis vitae at porttitor orci semper turpis feugiat auctor semper morbi. Tempor suscipit odio ex faucibus faucibus tincidunt condimentum, elementum."
    },
    appStats: {
        items: [
            {
                label: "Active Users",
                value: 9999999,
                formatValue: numberToDisplayString
            },
            {
                label: "Dollars Made",
                value: 123456789,
                formatValue: numberToDisplayString
            },
            {
                label: "Media Items",
                value: 123456789,
                formatValue: numberToDisplayString
            },
            {
                label: "Messages Shared",
                value: 123456789,
                formatValue: numberToDisplayString
            },
        ]
    }
}


export default appData
