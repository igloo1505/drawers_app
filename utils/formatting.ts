export const numberToDisplayString = (val: string | number) => {
    let v = String(Math.round(Number(val)))
    let s = ""
    let l = v.length
    for (var i = l; i >= 0; i--) {
        // s += v.charAt(i)
        s = `${v.charAt(i)}${s}`
        if ((l - i) % 3 === 0 && i !== 0 && i !== v.length) {
            // s += ","
            s = `,${s}`
        }
    }
    return s
}

export const formatDollars = (val: string | number) => {
    return `$${numberToDisplayString(val)}`
}