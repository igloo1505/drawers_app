"use client"
import React from 'react'
import { unAuthenticatedButtons } from '../navigation/NavbarButtonSection';
import DrawerButton from './DrawerButton';
import { connect } from 'react-redux';
import { RootState } from '../../state/store';
import { toggleDrawer } from '../../state/actions/syncActions';

const connector = connect((state: RootState, props: any) => ({
    drawerOpen: state.UI.drawerOpen,
    props: props
}))


interface DrawerProps {
    drawerOpen: boolean
}


const Drawer = connector(({ drawerOpen }: DrawerProps) => {
    return (
        <div className={'h-screen fixed top-0 left-0 w-fit max-w-[60vw] min-w-[150px] z-[100] bg-[--surface-800] text-white px-4 flex flex-col justify-start items-start gap-2 transition-transform duration-500'}
            style={{
                transform: drawerOpen ? "translateX(0)" : "translateX(-100%)"
            }}>
            <div className={'w-full flex flex-row justify-end items-start mt-4 mb-4 cursor-pointer'}><i className={'pi pi-times'} onClick={() => toggleDrawer(false)} /></div>
            {unAuthenticatedButtons.map((b, i) => {
                return <DrawerButton item={b} key={`drawer-button-${i}`} />
            })}
        </div>
    )
})



export default Drawer;
