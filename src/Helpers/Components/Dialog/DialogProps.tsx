import {Field, Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import React from "react";
import {Card} from "@material-ui/core";

const DialogProps = (props)=> {
    return(
        <Form
            onSubmit={props.click}
            mutators={{
                ...arrayMutators
            }}
            initialValues={props.dialog.sections}
            render={({ handleSubmit,
                         form: { mutators: { push, pop }},
                         submitting,
                         pristine,
                     }) => (
                <Card variant="outlined">
                    <form onSubmit={handleSubmit}>

                    </form>
                </Card>
                )}
        />

    )
}

export default DialogProps