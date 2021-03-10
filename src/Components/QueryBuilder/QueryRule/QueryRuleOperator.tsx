import React, {useContext}               from 'react';
import {FC}                              from 'react';
import Autocomplete                      from "@material-ui/lab/Autocomplete";
import Chip                              from "@material-ui/core/Chip";
import {Field, FieldRenderProps}         from "react-final-form";
import TextField                         from "@material-ui/core/TextField";
import MenuItem                          from "@material-ui/core/MenuItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Grid                              from "@material-ui/core/Grid";
import {QueryColumnContext}              from "../QueryColumn";


const QueryTextField = (props) => (
    <TextField
        variant="outlined"
        label="Enter Value"
        fullWidth
        margin={"dense"}
        InputLabelProps={{
            shrink: true,
        }}
        {...props}
    />
);

const QueryTextMultiple = ({ values, defaultValue, classes, input }) => (
    <Autocomplete
        multiple
        options={values || []}
        defaultValue={defaultValue && [defaultValue]}
        freeSolo
        size="small"
        renderTags={(value: string[], getTagProps) =>
            value.map((option: string, index: number) => (
                <Chip size="small" variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }
        renderInput={params => (
            <TextField {...params} variant="outlined" classes={classes} margin={"dense"} label="Enter Values"
                       placeholder="Enter Values"/>
        )}
        {...input}
    />
);

const QueryDateField = (props) => (
    <QueryTextField {...props} type={"date"}/>
);
const QueryNumberField = (props) => (
    <QueryTextField {...props} type={"number"}/>
);

const QueryEnumField = ({ values, defaultValue, ...input }) => (
    <TextField select label="Select Value" margin={"dense"} variant="outlined" fullWidth {...input}>
        {values.map(value => (
            <MenuItem key={value} value={value}>
                {value}
            </MenuItem>
        ))}
    </TextField>
);

const QueryNumberMultiple = ({ values, defaultValue, classes, ...input }) => (
    <Autocomplete
        multiple
        options={values || []}
        defaultValue={defaultValue && [defaultValue]}
        freeSolo
        size="small"
        renderTags={(value: string[], getTagProps) =>
            value.map((option: string, index: number) => (
                <Chip size="small" variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }
        renderInput={params => (
            <TextField {...params} classes={classes} type={"number"} variant="outlined" margin={"dense"}
                       label="Enter Values" placeholder="Enter Values"/>
        )}
        {...input}
    />
);


export const operators = {
    string: [
        { value: 'contains', label: 'Contains', component: QueryTextField },
        { value: 'equal', label: 'Equal', component: QueryTextField },
        { value: 'notEqual', label: 'Not Equal', component: QueryTextField },
        { value: 'in', label: 'In', component: QueryTextMultiple },
        { value: 'notIn', label: 'NotIn', component: QueryTextMultiple },
        { value: 'isEmpty', label: 'Is Empty' },
        { value: 'isNotEmpty', label: 'Is Not Empty' }
    ],
    date: [
        { value: 'equal', label: 'Equal', component: QueryDateField },
        { value: 'greaterThan', label: 'Greater Than', component: QueryDateField },
        { value: 'greaterThanOrEqual', label: 'Greater Than Or Equal', component: QueryDateField },
        { value: 'lessThan', label: 'Less Than', component: QueryDateField },
        { value: 'lessThanOrEqual', label: 'Less Than Or Equal', component: QueryDateField },
        { value: 'notEqual', label: 'Not Equal', component: QueryDateField },
        { value: 'isEmpty', label: 'Is Empty' },
        { value: 'isNotEmpty', label: 'Is Not Empty' }
    ],
    boolean: [
        { value: 'isTrue', label: 'Is True' },
        { value: 'isFalse', label: 'Is False' }
    ],
    number: [
        { value: 'equal', label: 'Equal', component: QueryNumberField },
        { value: 'greaterThanOrEqual', label: 'Greater Than Or Equal', component: QueryNumberField },
        { value: 'greaterThan', label: 'Greater Than', component: QueryNumberField },
        { value: 'lessThan', label: 'Less Than', component: QueryNumberField },
        { value: 'lessThanOrEqual', label: 'Less Than Or Equal', component: QueryNumberField },
        { value: 'notEqual', label: 'Not Equal', component: QueryNumberField },
        { value: 'in', label: 'In', component: QueryNumberMultiple },
        { value: 'notIn', label: 'Not In', component: QueryNumberMultiple },
        { value: 'isEmpty', label: 'Is Empty' },
        { value: 'isNotEmpty', label: 'Is Not Empty' }
    ],
    enum: [
        { value: 'equal', label: 'Equal', component: QueryEnumField },
        { value: 'notEqual', label: 'Not Equal', component: QueryEnumField },
    ]
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            marginTop: theme.spacing(0.5)
        }
    }),
);

export const QueryRuleOperator: FC<FieldRenderProps<string>> = (props) => {
    const classes = useStyles();
    const column = useContext(QueryColumnContext);
    const options = operators[column.type];
    return (
        <Grid item xs={12} md={3}>
            <TextField
                classes={{ root: classes.input }}
                select
                label="Select Operator"
                variant="outlined"
                margin={"dense"}
                fullWidth
                {...props.input}
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Grid>

    )
};

export default QueryRuleOperator;