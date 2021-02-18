export const changeCaps= item => {
    return {
        type: 'change_caps',
        payload: item
    }
}

export const clearCaps= item => {
    return {
        type: 'clear_caps',
        payload: item
    }
}