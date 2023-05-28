import { AppStatItemType, FeatureLabelType, HighlightedFeatureType } from "../../types/UITypes"

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
    },
    featureLabels: FeatureLabelType[],
    highlightedFeatures: HighlightedFeatureType[]
}

export const groupFeatureLabels = (featureLabels: FeatureLabelType[]) => {
    if (!featureLabels) {
        return {}
    }
    return {
        "seller": featureLabels.filter((label) => label.category === "seller"),
        "buyer": featureLabels.filter((label) => label.category === "buyer"),
        "content": featureLabels.filter((label) => label.category === "content"),
    }
}


const appData: AppDataType = {
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
                formatValue: "number"
            },
            {
                label: "Dollars Made",
                value: 123456789,
                formatValue: "number"
            },
            {
                label: "Media Items",
                value: 123456789,
                formatValue: "number"
            },
            {
                label: "Messages Shared",
                value: 123456789,
                formatValue: "number"
            },
        ]
    },
    featureLabels: [
        {
            label: "Nulla est lorem at ac,.",
            category: "buyer"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "buyer"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "buyer"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "buyer"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "buyer"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "buyer"
        },

        {
            label: "Nulla est lorem at ac,.",
            category: "seller"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "seller"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "seller"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "seller"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "seller"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "seller"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "content"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "content"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "content"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "content"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "content"
        },
        {
            label: "Nulla est lorem at ac,.",
            category: "content"
        },
    ],
    highlightedFeatures: [
        {
            title: "Nulla est lorem at ac,.",
            body: "Nulla in eu curabitur hac enim bibendum praesent sed ante dictum tempor eget neque, elit molestie condimentum laoreet, a nec in lacus duis. Feugiat aenean at in id ipsum suspendisse.",
            iconClass: "FaPlayCircle"
        },
        {
            title: "Nulla est lorem at ac,.",
            body: "Nulla in eu curabitur hac enim bibendum praesent sed ante dictum tempor eget neque, elit molestie condimentum laoreet, a nec in lacus duis. Feugiat aenean at in id ipsum suspendisse.",
            iconClass: "FaUnlock"
        },
        {
            title: "Nulla est lorem at ac,.",
            body: "Nulla in eu curabitur hac enim bibendum praesent sed ante dictum tempor eget neque, elit molestie condimentum laoreet, a nec in lacus duis. Feugiat aenean at in id ipsum suspendisse.",
            iconClass: "FaCoins"
        },
        {
            title: "Nulla est lorem at ac,.",
            body: "Nulla in eu curabitur hac enim bibendum praesent sed ante dictum tempor eget neque, elit molestie condimentum laoreet, a nec in lacus duis. Feugiat aenean at in id ipsum suspendisse.",
            iconClass: "FaCoins"
        },
    ]
}


export default appData
