const theme = (state = { theme: 'light' }, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.value,
            }
        default:
            return false
    }
}

export default theme;