import DataClasses from "../../jsoncode/classes";
import React, {useEffect, useState} from "react";
import {PageType} from "../../Types/TabsTypes";
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
    const [classes, setClasses]=useState([])
    const [newPageName, setNewPageName]=useState("");

    useEffect(()=>{
        getData();
    },[])

    const  getData= ()=>{
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
                generateClasses(myJson);
            });
    }

    const generateClasses=(myJson) => {
        let classesArray=[];
        DataClasses.map((obj) =>{
            if (obj.isDocument && !obj.isSystem) {
                myJson.map((page)=>{
                    if (page.classId !== obj.name){
                        classesArray.push(obj.name)
                    }
                })
            }
        })
        setClasses(classesArray)
    }

    const takePageName = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNewPageName(event.target.value as string) ;
    }

    const addNewPage = () => {
        if (newPageName){
            const pagesArray = JSON.parse(JSON.stringify(pages));
            pagesArray.push({classId:newPageName});
            setPages(pagesArray);
            removeClass(newPageName)
            setNewPageName("");
        }
    }

    const deletePage = (id)=>{
        const pagesArray = JSON.parse(JSON.stringify(pages));
        pagesArray.map((page,index)=>{
            if (page.classId === id){
                pagesArray.splice(index,1);
                addClass(page.classId)
            }
        })
        setPages(pagesArray);

    }

    const addClass = (name)=>{
        const classesArray = JSON.parse(JSON.stringify(classes));
        classesArray.push(name);
        setClasses(classesArray);
    }

    const removeClass = (name) => {
        classes.map((item, index)=>{
            if (item === name){
                classes.splice(index, 1)
            }
        })
    }

    const EditPage = (page) => {

    }

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            formControl: {
                margin: theme.spacing(0),
                minWidth: 150,
            }
        }),
    );

    const styleClasses = useStyles();

    return(
        <Container fixed>
            <h1>Pages</h1>
            <FormControl className={styleClasses.formControl}>
                <InputLabel id="create-page-label">Create Page</InputLabel>
                <Select
                    labelId="create-page-label"
                    id="create-page"
                    onChange={takePageName}
                >
                    {classes.map((name) =>{
                            return <MenuItem key={name} value={name}>{name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={addNewPage}>+</Button>
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
                        {pages.map((page: PageType)=> {
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
                                        <Button variant="contained" color="primary" href={`/page/${page.classId}`} onClick={()=>EditPage(page)}>
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