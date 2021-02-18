export const changeFavs= item => {
    return {
        type: 'change_favs',
        payload: item
    }
}

export const clearFavs= item => {
    return {
        type: 'clear_favs',
        payload: item
    }
}