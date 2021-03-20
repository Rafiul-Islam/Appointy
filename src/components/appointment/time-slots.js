import React, {useState} from 'react';
import moment from "moment";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography} from "@material-ui/core";
import BookingAppointmentForm from "./booking-appointment-form";
import createSlots from "../../utils/slot-config";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80vw',
        paddingTop: '100px'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '7px'
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TimeSlots = ({selectedDay, details, selectedDate}) => {
    const classes = useStyles();
    selectedDay = selectedDay.toLowerCase()
    const [appointmentTime, setAppointmentTime] = useState('')
    const availabilityTime = details.availability[selectedDay]
    // for booking info modal
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (time) => {
        setAppointmentTime(time)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //format start and end time for making time slots
    let startTime = availabilityTime && availabilityTime.split(" - ")[0]
    let endTime = availabilityTime && availabilityTime.split(" - ")[1]

    if (startTime && startTime.includes('AM')) {
        startTime = `${startTime && startTime.split(" ")[0]}`
    }
    if (startTime && startTime.includes('PM')) {
        startTime = `${parseInt(availabilityTime && availabilityTime.split(" - ")[0].split(" ")[0].split(":")[0]) + 12}:${availabilityTime && availabilityTime.split(" - ")[0].split(" ")[0].split(":")[1]}`
    }

    if (endTime && endTime.includes('AM')) {
        endTime = `${endTime && endTime.split(" ")[0]}`
    }
    if (endTime && endTime.includes('PM')) {
        endTime = `${parseInt(availabilityTime && availabilityTime.split(" - ")[1].split(" ")[0].split(":")[0]) + 12}:${availabilityTime && availabilityTime.split(" - ")[1].split(" ")[0].split(":")[1]}`
    }

    //obj for making time slots
    const slotConfig = {
        "configSlotHours": "0",
        "configSlotMinutes": `${details.visitDurationInMin}`,
        "configSlotPreparation": "0",
        "timeArr": [
            {"startTime": `${startTime}`, "endTime": `${endTime}`}
        ]
    }

    const showTimeSlots = createSlots(slotConfig).map((timeSlot, index) =>
        <Grid key={index} item xs={12} sm={3}>
            <Paper className={classes.paper}>
                <Box>
                    <img src="https://img.icons8.com/color/96/000000/health-checkup.png"/>
                </Box>
                <Box>
                    <Typography variant='h5'>{details.name}</Typography>
                    <Typography
                        variant='subtitle1'
                        color='primary'
                    >
                        <strong>
                            <small>{`${timeSlot && timeSlot.timeSlotStart}-${timeSlot && timeSlot.timeSlotEnd}`}</small>
                        </strong>
                    </Typography>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={handleClickOpen.bind(this, `${moment(selectedDate).format('LL')} - ${timeSlot && timeSlot.timeSlotStart} to ${timeSlot && timeSlot.timeSlotEnd}`)}
                        style={{marginTop: '10px'}}
                    >
                        <small>Book Appointment</small>
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} style={{textAlign: "center", marginBottom: '60px'}}>
                    <Typography color='primary' variant='h4'>
                        Available Appointment on {selectedDate && moment(selectedDate).format('LL')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {showTimeSlots}
            </Grid>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Booking Information"}</DialogTitle>
                <DialogContent>
                    <BookingAppointmentForm appointmentTime={appointmentTime}/>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color="secondary">
                        Close
                    </Button>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TimeSlots;
