export const isAuthenticated = () => {
    debugger
    try {
        const isAuth = localStorage.getItem('@DvxUpdateData:token');
        return (!!isAuth) ? true : false
    } catch {
        return false
    }
}