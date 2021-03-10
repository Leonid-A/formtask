import React         from 'react';
import {QueryColumn} from "./QueryColumn";

export const QueryContext = React.createContext<{
    columns:QueryColumn[]
}>({columns:[]});
