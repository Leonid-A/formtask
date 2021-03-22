import {PageType} from "../../Types/TabsTypes";

const  FetchData = async (props: {type: string, data?: PageType[]}) => {
   return await fetch('https://form-update-ae431-default-rtdb.firebaseio.com/data.json', {
       method: `${props.type}`,
       body: JSON.stringify(props.data),
       headers: {"Content-Type": "application/json"}
   })
}

export default FetchData