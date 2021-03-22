import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import styles from "../../../Styles/Page.module.css";
import {Props} from "../../../Types/TabsTypes";
import React from "react";

const Tabs = (props)=>{
    return(
        <Box>
            <h2>Tabs</h2>
            <TableContainer component={Paper} className={styles.table}>
                <Table  size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Delete</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data && props.data.tabs && props.data.tabs.map((tab:Props, index:number)=> {
                            return(
                                <TableRow key={tab.title}>
                                    <TableCell align="center">
                                        <h3>{tab.title}</h3>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="secondary" onClick={()=> props.delete(index)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="primary" onClick={()=> props.edit(tab, index)}>
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {props.children}
        </Box>
    )
}

export default Tabs