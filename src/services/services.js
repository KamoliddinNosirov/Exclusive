export const setToken = (token)=>{
    localStorage.setItem("ecomerse_token", token)
}

export const getToken = ()=>{
    return localStorage.getItem("ecomerse_token")
}