import React from "react";
import {Props} from "../../../Types/TabsTypes";
import styles from "../../../Styles/Tab.module.css";
import {Field, Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {Box, Button, ButtonGroup, Card, Grid} from "@material-ui/core";

const NotesView: React.FC<Props>  = (props) => {

    return(
        <Box className={styles.tab}>
            <h1>{props.title} Tab</h1>
            <Form
                onSubmit={props.click}
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
                                <Grid item xs={3}>
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
                            <Grid container className={styles.btnGroup} >
                                <ButtonGroup  variant="contained" color="primary" aria-label="contained primary button group">
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

export default NotesView;