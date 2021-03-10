import React, {FC, useContext, useMemo} from 'react';
import {QueryColumnContext}             from "./QueryColumnContext";
import {QueryContext}                   from "../QueryContext";

export const QueryColumnProvider: FC<{ field: string }> = (props) => {
    const { columns } = useContext(QueryContext);
    const column = useMemo(() => columns.find(col => col.field === props.field), [props.field, columns]);
    if( !column ){
        return null;
    }
    return (
        <QueryColumnContext.Provider value={column}>
            {props.children}
        </QueryColumnContext.Provider>
    )
};