import DataContext from "./dataContext";
import {useEffect, useState} from "react";
import FetchData from "../FetchData/FetchData";
import {PageType} from "../../Types/TabsTypes";

const DataProvider = (props) => {
    const [pages, setPages]=useState<PageType[]>([]);

    useEffect(()=>{
        (async ()=>{
            await getData();
        })()
    },[])

    const getData= async ()=>{
        try {
            const res = await FetchData({type: "GET"})
            const resData = await res.json()
            let data:  PageType[];
            for (const key in resData) {
                data = resData[key]
            }
            setPages(data)
        }catch (e){
            console.info(e)
        }
    }

    const updateData = (newData)=> {
        setPages(newData)
    }

    return(
        <DataContext.Provider value={{pages: pages, updatePages: updateData}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider