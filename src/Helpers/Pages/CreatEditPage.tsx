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
import FetchData from "../FetchData";

const CreatEditPage = () => {
    const [pages, setPages]=useState<PageType[]>([]);
    const [classes, setClasses]=useState([])
    const [newPageName, setNewPageName]=useState("");
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        (async ()=>{
            await getData();
            setLoading(false)
        })()
    },[])

    const getData= async ()=>{
        try {
            const res = await FetchData({type: "GET"})
            const resData = await res.json()
            let data:  PageType[];
            for (const key in resData) {
                data = resData[key]
            }
            setPages(data)
            generateClasses(data);

        }catch (e){
            console.info(e)
        }

    }

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

    const addNewPage = async () => {
        if (newPageName){
            const pagesArray = JSON.parse(JSON.stringify(pages));
            pagesArray.push({
                classId:newPageName,
                tabs: []
            });
            try {
                await FetchData({type: "POST", data: pagesArray});
                setPages(pagesArray);
                removeClass(newPageName)
                setNewPageName("");
            }catch ( e ){
                console.info(e)
            }
        }
    }

    const deletePage = async (name: string)=>{
        const pagesArray = JSON.parse(JSON.stringify(pages));
        pagesArray.map((page,index)=>{
            if (page.classId === name){
                pagesArray.splice(index,1);
            }
        })
        try {
            await FetchData({type: "POST", data: pagesArray});
            setPages(pagesArray);
            addClass(name);
        }catch ( e ){
            console.info(e)
        }
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
                        {!loading?  pages.map((page: PageType, index)=> {
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
                        }):<TableRow><TableCell><p>Loading...</p></TableCell></TableRow>}

                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CreatEditPage;