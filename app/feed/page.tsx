import React from 'react'
import Feed from 'components/landing/authenticatedHome/Feed';
import { getFeed } from 'state/actions/serverActions';
import { getUserIdFromCookies } from 'utils/authWithCookiesHook';
import { redirect } from 'next/navigation';


interface FeedPageProps {

}


const FeedPage = async (props: FeedPageProps) => {
    const userId = await getUserIdFromCookies()
    if (!userId) {
        redirect("/")
    }
    const feedContent = await getFeed(userId)

    return (
        <div className={'w-full h-fit'}>
            <div className={'w-full h-fit flex flex-col justify-center items-start'}>
                <Feed content={feedContent} />
            </div>
        </div>
    )
}

FeedPage.displayName = "FeedPage"


export default FeedPage;
