import Classes from "../../jsoncode/classes";
import React, {useState} from "react";
import Lead from "../../jsoncode/layout";
import {Page} from "../../Types/TabsTypes"
import {Container} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import styles from '../../Styles/CreatePage.module.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CreatEditPage = () => {
    const [pages, setPages]=useState([Lead])
    let newPageName: string;

    const takePageName = (event: React.ChangeEvent<{ value: unknown }>) => {
        newPageName = (event.target.value === "select page") ? "" : event.target.value as string ;
    }

    const addNewPage = () => {
        if (newPageName){
            const pagesArray = JSON.parse(JSON.stringify(pages));
            pagesArray.push({classId:newPageName});
            setPages(pagesArray);
            newPageName= "";
        }
    }

    const deletePage = (id)=>{
        const pagesArray = JSON.parse(JSON.stringify(pages));
        pagesArray.map((page,index)=>{
            if (page.classId === id){
                pagesArray.splice(index,1);
            }
        })
        setPages(pagesArray);
    }

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            formControl: {
                margin: theme.spacing(0),
                minWidth: 150,
            }
        }),
    );

    const classes = useStyles();

    return(
        <Container fixed>
            <h1>Pages</h1>
            <FormControl className={classes.formControl}>
                <InputLabel id="create-page-label">Create Page</InputLabel>
                <Select
                    labelId="create-page-label"
                    id="create-page"
                    value={""}
                    onChange={takePageName}

                >
                    {Classes.map((obj) =>{
                        if (obj.isDocument && !obj.isSystem) {
                            return <MenuItem key={obj.name} value={obj.name} >{obj.name}</MenuItem>
                        }
                    })}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={addNewPage}>Add</Button>

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
                        {pages.map((page: Page)=> {
                            return(
                                <TableRow key={page.classId}>
                                    <TableCell align="center">
                                        {page.classId}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="secondary" onClick={()=> deletePage(page.classId)}>
                                        Delete
                                    </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="primary" href={`/${page.classId}`}>
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CreatEditPage;