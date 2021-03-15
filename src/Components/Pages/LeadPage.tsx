import Lead from "../../jsoncode/layout";
import React, {useState} from "react";
import {Page, Props} from "../../Types/TabsTypes";
import Tab from "../Tab";
import Container from "@material-ui/core/Container";
import styles from '../../Styles/Page.module.css';
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const LeadPage = () => {
    const [leadObj, setLeadObj] = useState<Page>(Lead);
    let newTabName = "";
    const [Component, setComponent]=useState<JSX.Element>();

    const takeTabName = (event: React.ChangeEvent<{ value: unknown }>)=> {
        newTabName = (event.target.value === "select tab") ? "" : event.target.value as string
    }

    const deleteTab = (index)=>{
        const editLeadObj = JSON.parse(JSON.stringify(leadObj))
        editLeadObj.tabs.splice(index,1);
        setLeadObj(editLeadObj);
    }

    const addNewTab=()=>{
        if (newTabName){
            const editLeadObj = JSON.parse(JSON.stringify(leadObj));
            editLeadObj.tabs.push({title: newTabName});
            setLeadObj(editLeadObj);
            newTabName= "";
        }
    }

    const editCurrentTab = (tab, index)=> {
        if (!Component){
            setComponent(<Tab key={tab.title + index} {...tab}/>)
        }
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
            <TextField
                id="classId"
                label="Path"
                style={{ margin: 8 }}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                defaultValue={leadObj.classId}
            />

            <div>
                <h2>Tabs</h2>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="new-tab-label">Add New Tab</InputLabel>
                        <Select
                            labelId="new-tab-label"
                            id="new-tab"
                            value={""}
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
            </div>
        </Container>
    )
}

export default LeadPage;
