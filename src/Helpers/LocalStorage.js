export const setItemInLocalStorage=(name,data={})=>{
    localStorage.setItem(name, JSON.stringify(data));
}
export const getItemFromLocalStorage=(name)=>{
   return JSON.parse(localStorage.getItem(name)||'[]')
}