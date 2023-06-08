import axios from "axios"
import { defaultAxiosConfig } from "../types/NetworkTypes"
import type { Profile } from "@prisma/client"



export const submitProfileData = async (data: Partial<Profile>) => {
    const res = await axios.post("/api/profile/edit", data, defaultAxiosConfig)
    console.log("Res: ", res)
}
