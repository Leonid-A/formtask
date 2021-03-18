import DataClasses from "../../jsoncode/classes";
import React, {useEffect, useState} from "react";
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

const CreatEditPage = () => {
    const [pages, setPages]=useState<PageType[]>([]);
    const [classes, setClasses]=useState([])
    const [newPageName, setNewPageName]=useState("");

    useEffect(()=>{
        getData();
    },[])

    const getData= ()=>{

       fetch('https://form-update-ae431-default-rtdb.firebaseio.com/data.json',{
           method:"GET",
          headers: {"Content-Type": "application/json"}
      })
            .then(response => {
                return response.json();
            })
            .then(responseData => {
               let data:  PageType[];
               for (const key in responseData) {
                   data = responseData[key]
               }
               console.log(data)
               setPages(data)
               generateClasses(data);
            });
    }

    const generateClasses=(data) => {
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
            fetch("https://form-update-ae431-default-rtdb.firebaseio.com/data.json",{
                method: "POST",
                body: JSON.stringify(pagesArray),
                headers: {"Content-Type": "application/json"}
            }).then(response => {
                setPages(pagesArray);
                removeClass(newPageName)
                setNewPageName("");
            }).catch(err=> console.log(err))
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
                        {pages && pages.map((page: PageType, index)=> {
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
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CreatEditPage;