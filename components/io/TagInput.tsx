"use client"
import React, { FocusEventHandler, MouseEventHandler } from 'react'
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Tag } from '@prisma/client';
import Button from './Button';
import UITag from '../ui/Tag';
import { RemoveTagFuncType } from '../../types/contentManipulationTypes';


interface TagInputProps {
    handleAppend: () => void
    helperText?: string,
    value: string
    extraClasses?: string
    onFocus?: FocusEventHandler
    onBlur?: FocusEventHandler
    options: Tag[]
    currentTags: Tag[]
    onChange: (e: AutoCompleteChangeEvent) => void
    onComplete: (e: AutoCompleteCompleteEvent) => void
    handleRemove: RemoveTagFuncType
}

const itemTemplate = (item: Tag) => {
    return (
        <div>
            <div>{item.formattedValue}</div>
        </div>
    )
}


const TagInput = ({ handleAppend, handleRemove, currentTags, value, extraClasses, onChange, onComplete, onFocus, onBlur, options }: TagInputProps) => {
    const id = "tag-input-group"
    return (
        <div className={'w-full'}>
            <label htmlFor={id}>Tags</label>
            <div className={'autocomplete-grid'}>
                <AutoComplete id={id} field="name" value={value} suggestions={options}
                    completeMethod={onComplete} onChange={onChange} itemTemplate={itemTemplate} className={'w-full'} onKeyPress={(e) => {
                        if (e.code === "Enter") {
                            handleAppend()
                        }
                    }} />
                <Button label='Add' severity={value.length >= 3 || value.length === 0 ? "info" : "warning"} onClick={handleAppend} />
            </div>
            <div className={'w-full mt-4 px-4 py-4 flex flex-row justify-start items-start flex-wrap gap-2'}>
                {currentTags.map((t: Tag, i) => {
                    return <UITag value={t.value} idx={i} formattedValue={t.formattedValue} key={`current-tags-${i}`} handleRemove={handleRemove} />
                })}
            </div>
        </div>
    )
}



export default TagInput;
