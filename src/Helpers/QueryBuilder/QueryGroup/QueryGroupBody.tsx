import React                             from 'react';
import {FC}                              from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }),
);

export const QueryGroupBody:FC = (props)=>{
    return (
        <div className="qb-group-body">{props.children}</div>
    )
};

export default QueryGroupBody;