import Classes from "../../jsoncode/classes";
import React, {useEffect, useState} from "react";
import {Page} from "../../Types/TabsTypes";
import styles from '../../Styles/CreatePage.module.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Button,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Container
} from '@material-ui/core';

const CreatEditPage = () => {
    const [pages, setPages]=useState([]);
    const [renderClasses, setRenderClasses]=useState([])
    const [newPageName, setNewPageName]=useState("");

    const getData=()=>{
        fetch('data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setPages(myJson)
            });
    }

    const setClasses=() => {
        let classesArray=[];
        Classes.map((obj) =>{
            if (obj.isDocument && !obj.isSystem) {
                pages.map((page)=>{
                    if (page.classId !== obj.name){
                        classesArray.push(obj.name)
                    }
                })
            }
        })
        setRenderClasses(classesArray)
    }

    useEffect(()=>{
        getData()
        setClasses()

    },[])


    const takePageName = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNewPageName(event.target.value as string) ;
    }

/*    const addNewPage = () => {
        if (newPageName){
            const pagesArray = JSON.parse(JSON.stringify(pages));
            pagesArray.push({classId:newPageName});
            setPages(pagesArray);
            setNewPageName("");
        }
    }*/

/*    const deletePage = (id)=>{
        const pagesArray = JSON.parse(JSON.stringify(pages));
        pagesArray.map((page,index)=>{
            if (page.classId === id){
                pagesArray.splice(index,1);
            }
        })
        setPages(pagesArray);
    }*/

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
                    onChange={takePageName}
                >
                    {renderClasses.map((name) =>{
                            return <MenuItem key={name} value={name} >{name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            {/*<Button variant="contained" color="primary" onClick={addNewPage}>+</Button>
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
                                        <h3>{page.classId}</h3>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="secondary" onClick={()=> deletePage(page.classId)}>
                                        X
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
            </TableContainer>*/}
        </Container>
    )
}

export default CreatEditPage;