import React, {useCallback, useEffect, useState} from "react";
import {PageType, Props} from "../../Types/TabsTypes";
import DetailsView from "../Components/DetailsView/DetailsView";
import ActivityView from "../Components/ActivityView/ActivityView";
import NotesView from "../Components/NotesView/NotesView";
import styles from '../../Styles/Page.module.css';
import {
    Grid,
    Container,
    TextField,
    Box,
    TableContainer,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    Table,
    Paper,
    Button,
} from "@material-ui/core";
import {Field, Form} from "react-final-form";
import FetchData from "../FetchData";

const Page = (props) => {
    const [pageIndex, setPageIndex] = useState<number>()
    const [pages, setPages] = useState<PageType[]>()
    const [leadObj, setLeadObj] = useState<PageType>();
    const [Component, setComponent]=useState<JSX.Element>(null);

    useEffect(()=> {
        let i;
        let allPages;
        if (props.location.state){
            i = props.location.state.index;
            allPages = props.location.state.pages;
            setPageIndex(i);
            setPages(allPages);
            setLeadObj(allPages[i]);
        } else {
            (async ()=>{
                await getData();
            })()
        }
    }, [])

    const getData = async() => {
        let i;
        let allPages;
        try {
            const res = await FetchData({type: "GET"})
            const resData = await res.json()
            for (const key in resData) {
                allPages = resData[key]
            }
            const id = props.match.params.classId
            i= allPages.findIndex(item => item.classId === id)
            setLeadObj(allPages[i])
        }catch (e){
            console.info(e)
        }
    }

    const deleteTab = async(index: number)=>{
        const editLeadObj = JSON.parse(JSON.stringify(leadObj))
        const allPages = JSON.parse(JSON.stringify(pages))
        editLeadObj.tabs.splice(index,1);
        allPages[pageIndex]= editLeadObj;
        setPages(allPages);
        try {
            await FetchData({type: "POST", data: allPages});
            setLeadObj(editLeadObj)
        }catch ( e ){
            console.info(e)
        }
    }

    const submit = useCallback(async (values)=>{
        if(values.title && values.tabComponent && !Component) {
            const obj = {...leadObj}
            let index = obj.tabs.length;
            const tab = {
                title: values.title,
                path: "",
                icon: "",
                component: values.tabComponent,
                properties:{}
            }
            obj.tabs.push(tab);
            pages[pageIndex] = obj
            try {
                await FetchData({type: "POST", data: pages})
                setLeadObj(obj)
                editTab(tab, index)

            }catch ( e ){
                console.info(e)
            }
        }
    },[leadObj,FetchData])

    const editTab = (tab, index) => {
        switch(tab.component) {
            case "DetailsView":
                setComponent(<DetailsView key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
                break;
            case "ActivityView":
                setComponent(<ActivityView key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
                break;
            case "NotesView":
                setComponent(<NotesView key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
                break;
            default:
                setComponent(null)
        }
    }

    const editCurrentTab = (tab, index)=> {
        if (!Component){
            editTab(tab, index)
        }
    }

    const saveTabChanges =(value)=> {
        if (value){
            delete value.click;
            const editLeadObj = JSON.parse(JSON.stringify(leadObj));
            editLeadObj.tabs.map((tab, index) => {
                if (tab.title === value.title){
                    editLeadObj.tabs[index]= value;
                }
            })
            setLeadObj(editLeadObj)
        }
        setComponent(null);
    }

    const saveChanges = () => {
        console.log(leadObj)
    }

    return (
        <Container className={styles.page}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        id="classId"
                        label="Path"
                        style={{ margin: 8 }}
                        margin="normal"
                        InputLabelProps={{shrink: true}}
                        value={leadObj && leadObj.classId}
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" size="small" color="primary" onClick={saveChanges}> Save </Button>
                </Grid>
            </Grid>
            <Form
                onSubmit={submit}
                initialValues={null}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <label>Title</label>
                            </Grid>
                            <Grid item xs={3}>
                                <Field
                                    name="title"
                                    component="input"
                                    type="text"
                                    placeholder="Add Title"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <label>Tab Component</label>
                            </Grid>
                            <Grid item xs={3}>
                                <Field name="tabComponent" component="select">
                                    <option />
                                    <option value="DetailsView">DetailsView</option>
                                    <option value="NotesView" >NotesView</option>
                                    <option value="ActivityView" >ActivityView</option>
                                </Field>
                            </Grid>
                        </Grid>
                        <div className={styles.buttonGroup}>
                            <Button variant="contained" color="primary" type="submit" disabled={submitting || pristine}>
                                Submit
                            </Button>
                        </div>
                    </form>
                )}
            />
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
                            {leadObj && leadObj.tabs && leadObj.tabs.map((tab:Props, index:number)=> {
                                return(
                                    <TableRow key={tab.title}>
                                        <TableCell align="center">
                                            <h3>{tab.title}</h3>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" color="secondary" onClick={()=> deleteTab(index)}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" color="primary" onClick={()=> editCurrentTab(tab, index)}>
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {Component}
            </Box>
        </Container>
    )
}

export default Page;