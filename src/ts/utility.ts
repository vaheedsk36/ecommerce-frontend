export const getLocationDetails = async(url:string)=>{
    return (await fetch(url)).json();
}