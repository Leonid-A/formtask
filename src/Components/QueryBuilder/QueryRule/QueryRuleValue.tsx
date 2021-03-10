import React, {useContext}               from 'react';
import {FC}                              from 'react';
import {FieldRenderProps}                from "react-final-form";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {operators}                       from "./QueryRuleOperator";
import {QueryColumnContext}              from "../QueryColumn";
import Grid                              from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            marginTop: theme.spacing(0.5)
        }
    }),
);

export interface QueryRuleValueProps extends FieldRenderProps<string> {
    operator: string
}

export const QueryRuleValue: FC<QueryRuleValueProps> = (props) => {
    const classes = useStyles();
    const column = useContext(QueryColumnContext);

    const { operator, input } = props;

    if (!operator) {
        return null;
    }

    if (typeof column.render === 'function') {
        return column.render(column, operator);
    }

    const Component = operators[column.type]?.find(o => o.value === operator)?.component;
    if( !Component ){
        return null;
    }

    let inputProps: any = {
        ...input,
        classes: {
            root: classes.input
        }
    };
    if (column.values) {
        inputProps.values = column.values;
    }

    return (
        <Grid item xs={12} md={3}>
            <Component {...inputProps} />
        </Grid>
    )
};

export default QueryRuleValue;