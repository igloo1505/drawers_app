import { availableThemes } from "../initial/themeTesting"

export const disableAllThemes = () => {
    availableThemes.forEach((t) => {
        t.deactivateSelf()
        t.deactivateSelf()
    })
}
