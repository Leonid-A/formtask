import './QueryBuilder.css';
import React           from 'react';
import {FC}            from 'react';
import Paper           from "@material-ui/core/Paper";
import QueryContainer  from "./QueryContainer";
import {QueryColumn}   from "./QueryColumn";
import {QueryContext}  from "./QueryContext";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export const QueryBuilder: FC<{
    name: string
    columns: QueryColumn[]
}> = ({ columns, name }) => {

    return (
        <ThemeProvider theme={theme}>
            <QueryContext.Provider value={{ columns }}>
                <Paper variant="outlined" className="qb">
                    <QueryContainer name={name}/>
                </Paper>
            </QueryContext.Provider>
        </ThemeProvider>
    )
};


export default QueryBuilder;