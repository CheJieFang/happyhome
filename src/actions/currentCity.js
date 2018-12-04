export function changecity(city,cityId){
    return {
        type:'CHANGE_CURRENT_CITY',
        payload:[city,cityId]
    }
}