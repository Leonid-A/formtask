import {Box, Button} from '@material-ui/core';
import React from "react";

const Dialog = (props)=> {
    return(
        <Box>
            <h1>Dialog</h1>
            <h3>Sections</h3>
            <Button variant="contained" color="secondary" onClick={props.click}>Edit</Button>
            {props.children}
        </Box>
    )
}

export default Dialog