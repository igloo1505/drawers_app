import React from 'react'
import { getByTag } from 'state/actions/serverActions'



interface SearchByTagProps {
    params: {
        tagQuery: string
    }
}

const SearchByTag = async ({ params: {
    tagQuery
} }: SearchByTagProps) => {
    const tags = await getByTag(tagQuery)
    return (
        <div>
            Search by Tag goes here...
        </div>
    )
}



export default SearchByTag;
