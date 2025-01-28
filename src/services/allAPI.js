import { BASEURL } from "./baseURL"
import { commonAPI } from "./commonAPI"


//add menu 
export const addMenuApi = async (menudata) => {
    return await commonAPI('POST',`${BASEURL}/menu/addnew`,menudata,'')
}

//get all menu
export const getAllMenuApi = async()=>{
    return await commonAPI('GET',`${BASEURL}/menu/getall`)
}

//get menu food
export const getMenuDetailsApi = async (menuId) => {
    return await commonAPI('GET', `${BASEURL}/menu/${menuId}`);
}