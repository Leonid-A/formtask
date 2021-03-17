import React                             from 'react';
import {FC}                              from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Box                               from "@material-ui/core/Box";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton      from "@material-ui/lab/ToggleButton";
import ButtonGroup       from "@material-ui/core/ButtonGroup";
import Button            from "@material-ui/core/Button";
import AddIcon           from "@material-ui/icons/Add";
import AddCircleIcon     from "@material-ui/icons/AddCircle";
import DeleteIcon        from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toggleSelected: {
            color: `${theme.palette.text.primary}!important`,
            backgroundColor: `${theme.palette.secondary.main}!important`
        },
        sizeSmall: {
            height: "30px"
        }
    }),
);

export const QueryGroupHeader: FC<{
    onAddRule:()=>void,
    onAddGroup:()=>void,
    deletable?:boolean
    onDelete?:()=>void,
    [k:string]:any
}> = (props) => {
    const classes = useStyles();
    const {
        onDelete,
        onAddGroup,
        onAddRule,
        deletable,
        ...input
    } = props;
    return (
        <div className="qb-group-header">
            <Box paddingBottom={0.5} display={"flex"} justifyContent={"space-between"}>
                <ToggleButtonGroup
                    size={"small"}
                    exclusive
                    {...input}
                    onChange={(event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
                        if (newAlignment !== null) {
                            input.onChange(newAlignment);
                        }
                    }}
                >
                    <ToggleButton classes={{ selected: classes.toggleSelected, sizeSmall: classes.sizeSmall }}
                                  value="and">
                        <Box width={30}>and</Box>
                    </ToggleButton>
                    <ToggleButton classes={{ selected: classes.toggleSelected, sizeSmall: classes.sizeSmall }}
                                  value="or">
                        <Box width={30}>or</Box>
                    </ToggleButton>
                </ToggleButtonGroup>

                <ButtonGroup size={"small"} variant="contained" color="primary"
                             aria-label="outlined primary button group">
                    <Button
                        onClick={onAddRule}
                        startIcon={<AddIcon/>}
                    >Add rule</Button>
                    <Button
                        onClick={onAddGroup}
                        startIcon={<AddCircleIcon/>}
                    >Add Group</Button>
                    {deletable &&
                    <Button
                        onClick={onDelete}
                        color={"secondary"}
                        startIcon={<DeleteIcon/>}
                    >Delete</Button>
                    }
                </ButtonGroup>
            </Box>
        </div>
    )
};
export default QueryGroupHeader;