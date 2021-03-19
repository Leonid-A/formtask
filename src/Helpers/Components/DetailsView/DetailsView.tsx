import React from 'react';
import {Props} from "../../../Types/TabsTypes";
import {Field, Form} from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays';
import styles from '../../../Styles/Tab.module.css';
import {Box, Card, Grid, Button, ButtonGroup} from '@material-ui/core';


const DetailsView: React.FC<Props> = (props) => {
    return(
       <Box className={styles.tab}>
            <h1>{props.title} Tab</h1>
            <Form
                onSubmit={props.click}
                mutators={{
                ...arrayMutators
                }}
                initialValues={props}
                render={({ handleSubmit,
                           form: { mutators: { push, pop }},
                           submitting,
                           pristine,
                }) => (
                    <Card variant="outlined" className={styles.form}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <label >Path</label>
                                </Grid>
                                <Grid item xs={5}>
                                    <Field
                                        name="path"
                                        component="input"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <label className={styles.label}>Title</label>
                                </Grid>
                                <Grid item xs={5}>
                                    <Field
                                        name="title"
                                        component="input"
                                        type="text"
                                        disabled={true}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <label className={styles.label}>Icon</label>
                                </Grid>
                                <Grid item xs={5}>
                                    <Field
                                        name="icon"
                                        component="input"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <label className={styles.label}>Component</label>
                                </Grid>
                                <Grid item xs={5}>
                                    <Field

                                        name="component"
                                        component="input"
                                        type="text"
                                        disabled={true}
                                    />
                                </Grid>
                            </Grid>
                            <h3>Properties</h3>
                            <p>Sections</p>
                            <Grid container className={styles.buttonBlock}>
                                <Button variant="outlined" color="secondary"
                                    onClick={() => push('properties.sections', undefined)}
                                >
                                    Add Section
                                </Button>
                            </Grid>
                            <FieldArray name="properties.sections">
                                {({ fields }) =>
                                    fields.map((section, sectIndex) => (
                                        <Card key={section} variant="outlined" className={styles.form}>
                                            <Grid container>
                                                    <span
                                                        onClick={() => fields.remove(sectIndex)}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        ❌
                                                    </span>
                                                </Grid>
                                            <Grid container spacing={3}>
                                                <Grid item xs={2}>
                                                    <label className={styles.label}>Title</label>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Field
                                                        name={`${section}.title`}
                                                        component="input"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={3}>
                                                <Grid item xs={2}>
                                                    <label className={styles.label}>Editable</label>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Field
                                                        name={`${section}.editable`}
                                                        component="input"
                                                        type="checkbox"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container className={styles.buttonBlock}>
                                                <Button variant="outlined" color="secondary"
                                                    onClick={() => push(`${section}.selectedFields`, undefined)}
                                                >
                                                    Add Field
                                                </Button>
                                            </Grid>
                                            <FieldArray name={`${section}.selectedFields`}>
                                                {({ fields }) =>
                                                    fields.map((field, index) => (
                                                        <Card key={field} className={`${styles.form} + ${styles.field}`}>
                                                            <Grid container>
                                                                <span
                                                                    onClick={() => fields.remove(index)}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    ❌
                                                                </span>
                                                            </Grid>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={2}>
                                                                    <label className={styles.label}>Label</label>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Field
                                                                        name={`${field}.label`}
                                                                        component="input"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={2}>
                                                                    <label className={styles.label}>Read</label>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Field
                                                                        name={`${field}.read`}
                                                                        component="input"
                                                                        type="checkbox"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={2}>
                                                                    <label className={styles.label}>Write</label>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Field
                                                                        name={`${field}.write`}
                                                                        component="input"
                                                                        type="checkbox"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={2}>
                                                                    <label className={styles.label}>Name</label>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Field
                                                                        name={`${field}.name`}
                                                                        component="input"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={2}>
                                                                    <label className={styles.label}>Component</label>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Field name={`${field}.component`} component="select">
                                                                        <option value=""> </option>
                                                                        <option value="PointerField">PointerField</option>
                                                                        <option value="TextField">TextField</option>
                                                                        <option value="CurrencyField">CurrencyField</option>
                                                                        <option value="ChoiceField">ChoiceField</option>
                                                                        <option value="SwitchField">SwitchField</option>
                                                                    </Field>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={2}>
                                                                    <label className={styles.label}>Placeholder</label>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Field
                                                                        name={`${field}.placeholder`}
                                                                        component="input"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                         {/*   {props.properties.sections[sectIndex].selectedFields[index].conditions
                                                                ? <Conditions {...props.properties.sections[sectIndex].selectedFields[index].conditions}/>
                                                                : null}*/}

                                                        </Card>
                                                    ))
                                                }
                                            </FieldArray>
                                        </Card>
                                    ))
                                }
                            </FieldArray>
                            <Grid container className={styles.btnGroup} >
                                <ButtonGroup
                                    variant="contained"
                                    color="primary"
                                    aria-label="contained primary button group"
                                >
                                    <Button type="submit" disabled={submitting || pristine}>
                                        Submit
                                    </Button>
                                    <Button onClick={() => props.click(null)} >
                                        Close
                                    </Button>
                                </ButtonGroup>
                            </Grid>

                        </form>
                    </Card>
                )}
            />
       </Box>
    )
}

export default DetailsView;