import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, Grid, InputLabel, OutlinedInput, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: "Poppins",
    },
    titleBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
    },
    title: {
        color: '#505050',
        fontFamily: "Poppins",
        fontSize: '37px',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        }
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const BookingAppointmentForm = ({appointmentTime}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={6} justify='center'>
                <Grid item xs={12}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Time</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            labelWidth={60}
                            value={appointmentTime}
                            disabled
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            labelWidth={60}
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Mobile</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            labelWidth={60}
                            type="number"
                        />
                    </FormControl>
                    <TextField
                        fullWidth
                        className={classes.margin}
                        id="outlined-multiline-static"
                        label="Problem"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default BookingAppointmentForm;
