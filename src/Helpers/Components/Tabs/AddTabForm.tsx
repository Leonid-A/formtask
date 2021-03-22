import {Button, Grid} from "@material-ui/core";
import {Field, Form} from "react-final-form";
import styles from "../../../Styles/Page.module.css";
import React from "react";

const AddTabForm=(props)=> {
    return(
        <Form
            onSubmit={props.click}
            initialValues={null}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <label>Title</label>
                        </Grid>
                        <Grid item xs={3}>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Add Title"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <label>Tab Component</label>
                        </Grid>
                        <Grid item xs={3}>
                            <Field name="tabComponent" component="select">
                                <option />
                                <option value="DetailsView">DetailsView</option>
                                <option value="NotesView" >NotesView</option>
                                <option value="ActivityView" >ActivityView</option>
                            </Field>
                        </Grid>
                    </Grid>
                    <div className={styles.buttonGroup}>
                        <Button variant="contained" color="primary" type="submit" disabled={submitting || pristine}>
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        />
    )
}

export default AddTabForm