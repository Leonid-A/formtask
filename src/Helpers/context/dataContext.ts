import React from "react";
import {PageType} from "../../Types/TabsTypes";

const dataContext = React.createContext<{pages: PageType[], updatePages: (newData: PageType[])=> void}>({
    pages: [],
    updatePages: ()=> {}
});

export default dataContext;