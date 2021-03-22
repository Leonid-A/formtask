import DataClasses from "../../jsoncode/classes";
import React, {useEffect, useState, useContext} from "react";
import {PageType} from "../../Types/TabsTypes";
import styles from '../../Styles/CreatePage.module.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
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
import FetchData from "../FetchData/FetchData";
import DataContext from "../context/dataContext"

const CreatEditPage = () => {
    const [classes, setClasses]=useState([])
    const [newPageName, setNewPageName]=useState("");
    const [loading, setLoading]=useState(true);
    const {pages, updatePages}=useContext(DataContext);

    useEffect(()=>{
            generateClasses(pages)
            setLoading(false)
    },[pages])

    const generateClasses=(data: PageType[]) => {
        let contains = false;
        let classesArray=[];
        DataClasses.map((obj) =>{
            if (obj.isDocument && !obj.isSystem) {
                data.map((page)=>{
                    if (page.classId === obj.name){
                        contains=true
                    }
                })
                if(!contains){
                    classesArray.push(obj.name)
                }
            contains=false
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
            pagesArray.push({
                classId:newPageName,
                tabs: []
            });
            setData(pagesArray);
            removeClass(newPageName)
            setNewPageName("");
        }
    }

    const setData=async (newData)=> {
        try {
            await FetchData({type: "POST", data: newData});
            updatePages(newData);
        }catch ( e ){
            console.info(e)
        }
    }

    const deletePage =(name: string)=>{
        const pagesArray = [...pages];
        pagesArray && pagesArray.map((page,index)=>{
            if (page.classId === name){
                pagesArray.splice(index,1);
            }
        })
        setData(pagesArray)
        addClass(name);
    }

    const addClass = (name: string)=>{
        const classesArray = JSON.parse(JSON.stringify(classes));
        classesArray.push(name);
        setClasses(classesArray);
    }

    const removeClass = (name: string) => {
        const classesArray = JSON.parse(JSON.stringify(classes));
        classesArray.map((item, index)=>{
            if (item === name){
                classesArray.splice(index, 1)
            }
        })
        setClasses(classesArray)
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
                        {!loading
                            ?  pages.map((page: PageType, index)=> {
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
                                        <Link
                                            to={{
                                                pathname: `/page/${page.classId}`,
                                                state: {pages, index}
                                            }}
                                        >
                                            Edit
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                            :<TableRow><TableCell><p>Loading...</p></TableCell></TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CreatEditPage;