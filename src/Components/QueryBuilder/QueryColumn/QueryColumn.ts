import {ReactElement} from "react";

export interface QueryColumn {
    field: string,
    label?: string,
    type: string,
    defaultValue?: string,
    values?:string[],
    render?: (column:QueryColumn,operator:string) => ReactElement
}