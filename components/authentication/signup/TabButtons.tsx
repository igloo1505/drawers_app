"use client"
import { connect } from 'react-redux';
import { RootState } from '../../../state/store';

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkMode,
    props: props
}))


const TabButtons = connector(({ isSeller, setIsSeller, darkMode }: { isSeller: boolean, setIsSeller: (v: boolean) => void, darkMode: boolean }) => {
    const inactiveColor = !darkMode ? "var(--primary-200)" : "var(--primary-900)"
    return (
        <div className={'w-full grid grid-cols-2 place-items-center text-lg'}>
            <a role="button" className={'px-2 py-3 w-full text-center transition-all duration-300'}
                style={{
                    borderBottom: `3px solid ${isSeller ? "var(--primary-500)" : inactiveColor}`
                }}
                onClick={() => setIsSeller(true)}
            >
                Seller
            </a>
            <a role="button" className={'px-2 py-3 w-full text-center transition-all duration-300'}
                style={{
                    borderBottom: `3px solid ${!isSeller ? "var(--primary-500)" : inactiveColor}`
                }}
                onClick={() => setIsSeller(false)}
            >
                Buyer
            </a>

        </div>
    )
})

TabButtons.displayName = "TabButtons"

export default TabButtons
