import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get(MENU_API_URL+resId);
            setResInfo(response?.data);
        }
        fetchData();
    },[]);
    return resInfo;
}

export default useRestaurantMenu