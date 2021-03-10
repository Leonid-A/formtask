import React, {useContext}                       from 'react';
import {FC}                                      from 'react';
import {createStyles, makeStyles, Theme}         from "@material-ui/core/styles";
import Paper                                     from "@material-ui/core/Paper";
import TextField                                 from "@material-ui/core/TextField";
import MenuItem                                  from "@material-ui/core/MenuItem";
import Grid                                      from "@material-ui/core/Grid";
import Box                                       from "@material-ui/core/Box";
import IconButton                                from "@material-ui/core/IconButton";
import CloseIcon                                 from "@material-ui/icons/Close";
import {Field, useForm}                          from "react-final-form";
import {QueryRuleOperator}                       from "./QueryRuleOperator";
import {QueryContext}                            from "../QueryContext";
import {QueryColumnContext, QueryColumnProvider} from "../QueryColumn";
import QueryRuleValue                            from "./QueryRuleValue";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            marginTop: theme.spacing(0.5)
        }
    }),
);

export const QueryRuleContainer: FC<{
    name: string,
    onDelete: () => void
}> = ({ name, onDelete }) => {
    const classes = useStyles();
    const { columns } = useContext(QueryContext);
    const form = useForm();
    return (
        <div className="qb-rule-container">
            <Paper variant={"outlined"}>
                <Box padding={2}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={3}>
                            <Field name={`${name}.field`}>
                                {({ input, meta }) => (
                                    <TextField {...input}
                                               onChange={(...args) => {
                                                   form.change(`${name}.operator`, undefined);
                                                   form.change(`${name}.value`, undefined);
                                                   input.onChange(...args);
                                               }}
                                               classes={{
                                                   root: classes.input
                                               }} select size={"small"} variant={"outlined"} margin={"dense"} fullWidth
                                               label="Select a field"
                                    >
                                        {columns.map(col => (
                                            <MenuItem key={col.field} value={col.field}>
                                                {col.label || col.field}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </Field>
                        </Grid>
                        <Field name={`${name}.field`} subscription={{ value: true }}>
                            {({ input: { value }, meta }) => (
                                <QueryColumnProvider field={value}>
                                    <Field name={`${name}.operator`}>
                                        {(props) => (
                                            <QueryRuleOperator {...props} />
                                        )}
                                    </Field>
                                    <Field name={`${name}.operator`} subscription={{ value: true }}>
                                        {({ input, meta }) => {
                                            return (
                                                <QueryColumnContext.Consumer>
                                                    {(column) => (
                                                        <Field initialValue={column.defaultValue}
                                                               name={`${name}.value`}>
                                                            {(props) => (
                                                                <QueryRuleValue {...props} operator={input.value}/>
                                                            )}
                                                        </Field>
                                                    )}
                                                </QueryColumnContext.Consumer>
                                            )
                                        }}
                                    </Field>
                                </QueryColumnProvider>
                            )}
                        </Field>
                        <Grid item md={1}>
                            <IconButton onClick={onDelete}>
                                <CloseIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    )
};
export default QueryRuleContainer;