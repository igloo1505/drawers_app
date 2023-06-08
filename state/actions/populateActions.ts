import { Tag } from "@prisma/client";
import axios from "axios";
import { formatTagText } from "../../utils/formatting";
import { defaultAxiosConfig } from "../types/NetworkTypes";

export const getTagsClientside = async (query: string): Promise<Tag[]> => {
    const res = await axios.get(`/api/media/getTags/${formatTagText(query)}`, defaultAxiosConfig)
    if (res.data.tags) {
        return res.data.tags
    }
    return []
}
