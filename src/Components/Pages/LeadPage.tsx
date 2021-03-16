import Lead from "../../jsoncode/layout";
import React, {useState} from "react";
import {Page, Props} from "../../Types/TabsTypes";
import Tab from "../Tab";
import styles from '../../Styles/Page.module.css';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Grid,
    Container,
    Select,
    InputLabel,
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
    MenuItem,
    FormControl
} from "@material-ui/core";

const LeadPage = () => {
    const [leadObj, setLeadObj] = useState<Page>(Lead);
    const [newTabName, setNewTabName] =useState("");
    const [Component, setComponent]=useState<JSX.Element>(null);

    const takeTabName = (event: React.ChangeEvent<{ value: unknown }>)=> {
        const tabName = (event.target.value === "select tab") ? "" : event.target.value as string
        setNewTabName(tabName)
    }

    const setPathName = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setLeadObj({...leadObj, classId: event.target.value})
    }

    const deleteTab = (index)=>{
        const editLeadObj = JSON.parse(JSON.stringify(leadObj))
        editLeadObj.tabs.splice(index,1);
        setLeadObj(editLeadObj);
    }

    const addNewTab=()=>{
        if (newTabName && !Component){
            const editLeadObj = JSON.parse(JSON.stringify(leadObj));
            const index = leadObj.tabs.length
            const tab = {
                title: newTabName,
                path: "",
                icon: "",
                component: "",
                properties:{}
            }
            editLeadObj.tabs.push(tab);
            setLeadObj(editLeadObj);
            setNewTabName("");
            setComponent(<Tab key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
        }
    }

    const editCurrentTab = (tab, index)=> {
        if (!Component){
            setComponent(<Tab key={tab.title + index} {...tab} click={(value) => saveTabChanges(value)}/>)
        }
    }

    const saveTabChanges = (value)=> {
        if (value){
            delete value.onClick;
        }
        console.log(value)
        setComponent(null);
    }

    const saveChanges = () => {
        console.log(leadObj)
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

    return (

        <Container className={styles.page}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        id="classId"
                        label="Path"
                        style={{ margin: 8 }}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={leadObj.classId}
                        onChange={setPathName}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" size="small" color="primary" onClick={saveChanges}> Save </Button>
                </Grid>
            </Grid>
            <Box>
                <h2>Tabs</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel id="new-tab-label">Add New Tab</InputLabel>
                    <Select
                        labelId="new-tab-label"
                        id="new-tab"
                        onChange={takeTabName}
                    >
                        <MenuItem value={"test"}>test</MenuItem>
                        <MenuItem value={"other"} >other</MenuItem>
                    </Select>
                </FormControl>
                <Button  variant="contained" color="primary" onClick={addNewTab}>
                    Add
                </Button>
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
                            {leadObj.tabs.map((tab:Props, index:number)=> {
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

export default LeadPage;
