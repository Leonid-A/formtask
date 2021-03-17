import React, {useEffect, useState} from "react";
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

/*<div className="p-3 mb-2 bg-secondary text-white border-dark rounded">
    <div className="row">
        <div className="col-8">
            { renderConfigs.map((item)=>{
                let renderedItem: JSX.Element;
                switch (item[0]) {
                    case "component":
                        renderedItem =  <div className="row" key={item[0]}>
                            <div className="col-2">
                                <label htmlFor={item[0]} className="mr-2">{item[0]}</label>
                            </div>
                            <div className="col-4">
                                <select name={item[0]}
                                        defaultValue={item[1]}
                                        onChange={(event) => takeChanges(event, item[0])}
                                >
                                    <option value="DetailsView">DetailsView</option>
                                    <option value="NotesView">NotesView</option>
                                    <option value="ActivityView">ActivityView</option>
                                </select>
                            </div>
                        </div>
                        break;
                    case "properties":
                        renderedItem =  <div className="row" key={item[0]}>

                                        </div>
                        break;
                    default:
                        renderedItem = <div className="row" key={item[0]}>
                            <div className="col-2">
                                <label htmlFor={item[0]} className="mr-2">{item[0]}</label>
                            </div>
                            <div className="col-4">
                                <input type="text"
                                       name={item[0]}
                                       defaultValue={item[1]}
                                       onChange={(event) => takeChanges(event, item[0] )}
                                />
                            </div>
                        </div>
                }
                return renderedItem
            })}
        </div>
        <div className="col-2">
            <button className="btn btn-sm btn-primary m-2"
                    type="button"
                    onClick={saveChanges}
            >
                Save Changes
            </button>
        </div>
    </div>
</div>*/