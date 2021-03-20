import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';
import moment from "moment";
import TimeSlots from "./time-slots";

const AppointmentScheduler = ({details}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState('');
    const today = new Date();

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedDay(moment(date).format('ddd'))
    };

    function disableDays(date) {
        if (details.id == 1) {
            return date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 4 || date.getDay() === 5 || date.getDay() === 6;
        }
        if (details.id == 2) {
            return date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 5 || date.getDay() === 6;
        }
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                    <KeyboardDatePicker
                        variant="static"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        shouldDisableDate={disableDays}
                        minDate={today}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <TimeSlots details={details} selectedDay={selectedDay} selectedDate={selectedDate}/>
        </div>
    );
};

export default AppointmentScheduler;
