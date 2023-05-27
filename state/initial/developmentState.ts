import { ChangeModalType } from "../types/reduxTypes"

interface DevelopmentStateType {
    active_theme: string
    change_content_modal: ChangeModalType
}

const developmentState: DevelopmentStateType = {
    active_theme: "",
    change_content_modal: {
        label: "",
        value: "",
        isOpen: false,
        name: "",
        parentName: null,
        itemIndex: null,
        isAppStat: null,
        subKey: null
    }
}

export default developmentState
