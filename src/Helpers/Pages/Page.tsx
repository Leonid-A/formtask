import React, { useContext, useEffect, useState} from "react";
import {PageType} from "../../Types/TabsTypes";
import DetailsView from "../Components/Tabs/DetailsView/DetailsView";
import ActivityView from "../Components/Tabs/ActivityView/ActivityView";
import NotesView from "../Components/Tabs/NotesView/NotesView";
import styles from '../../Styles/Page.module.css';
import {Grid, Container, TextField} from "@material-ui/core";
import FetchData from "../FetchData/FetchData";
import DataContext from "../context/dataContext";
import Tabs from "../Components/Tabs/Tabs"
import AddTabForm from "../Components/Tabs/AddTabForm"
import Dialog from "../Components/Dialog/Dialog"
import {Link} from "react-router-dom";
import DialogProps from "../Components/Dialog/DialogProps"

const Page = (props) => {
    const [pageIndex, setPageIndex] = useState<number>()
    const [leadObj, setLeadObj] = useState<PageType>();
    const [TabComponent, setTabComponent]=useState<JSX.Element>(null);
    const [DialogComponent, setDialogComponent]=useState<JSX.Element>(null)
    const {pages, updatePages}=useContext(DataContext)

    useEffect(()=> {
        const id = props.match.params.classId
        pages.map((page, index)=> {
            if (page.classId === id){
                setLeadObj(page);
                setPageIndex(index)
            }
        })
    }, [pages, props.match.params.classId])

    const deleteTab = (index: number)=>{
        const editLeadObj = JSON.parse(JSON.stringify(leadObj))
        editLeadObj.tabs.splice(index,1);
        setData(editLeadObj)
    }

    const setData = async (data) => {
        const newPages = [...pages]
        newPages[pageIndex]=data;
        try {
            await FetchData({type: "POST", data: newPages});
            updatePages(newPages)
        }catch ( e ){
            console.info(e)
        }
    }

    const submit =(values)=>{
        if(values.title && values.tabComponent && !TabComponent) {
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
            setData(obj)
            editTab(tab, index)
        }
    }

    const editTab = (tab, index) => {
        switch(tab.component) {
            case "DetailsView":
                setTabComponent(<DetailsView key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
                break;
            case "ActivityView":
                setTabComponent(<ActivityView key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
                break;
            case "NotesView":
                setTabComponent(<NotesView key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
                break;
            default:
                setTabComponent(null)
        }
    }

    const editCurrentTab = (tab, index)=> {
        if (!TabComponent){
            editTab(tab, index)
        }
    }

    const saveTabChanges = (value)=> {
        if (value){
            delete value.click;
            const editLeadObj = JSON.parse(JSON.stringify(leadObj));
            editLeadObj.tabs.map((tab, index) => {
                if (tab.title === value.title){
                    editLeadObj.tabs[index]= value;
                }
            })
            setData(editLeadObj)
        }
        setTabComponent(null);
    }

    const submitDialogForm = (values) => {

    }

    const editDialog = () => {
        if (!DialogComponent){
            setDialogComponent(<DialogProps click={(values)=>submitDialogForm(values)}/>)
        }
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
                    <Link to={{
                        pathname: `/`,
                    }}>Back</Link>
                </Grid>
            </Grid>
            <AddTabForm click={(values) => submit(values)} />
            <Tabs
                data={leadObj}
                delete={(index)=> deleteTab(index)}
                edit={(tab,index)=>editCurrentTab(tab, index)}
            >
                {TabComponent}
            </Tabs>
            <Dialog data={leadObj} click={editDialog}>
                {DialogComponent}
            </Dialog>
        </Container>
    )
}

export default Page;