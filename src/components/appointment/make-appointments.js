import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Grid, Paper, Typography} from "@material-ui/core";
import treatment from '../../assets/svg/appointment/treatment.svg'
import {useHistory, useParams} from "react-router";
import {useLocation} from "react-router-dom";
import AppointmentScheduler from "./appointment-scheduler";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '100vh',
        background: '#F2F2F2',
        paddingTop: '8%',
        paddingLeft: '10%',
        paddingRight: '10%',
        fontFamily: "Poppins",
        [theme.breakpoints.down('sm')]: {
            paddingTop: '25%',
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: '50px'
        },
    },
    title: {
        color: '#505050',
        fontSize: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        }
    },
    subTitle: {
        color: '#909090',
        fontFamily: "Poppins",
        marginTop: '20px',
        width: '85%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    imgWeb: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    imgMobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
    appointmentButtonContainer: {
        marginTop: '20px',
    }
}));

const MakeAppointments = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory()
    const {id} = useParams()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Box clone order={{xs: 2, sm: 1}}>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.leftBox}>
                            <Typography className={classes.title}>
                                <strong>Make An
                                    Appointment<br/>With {location.state.detail && location.state.detail.name}</strong>
                            </Typography>
                            <Box className={classes.appointmentButtonContainer}>
                                <AppointmentScheduler details={location.state.detail}/>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                <Box clone order={{xs: 1, sm: 2}}>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.rightBox}>
                            <img className={classes.imgWeb} height='350' src={treatment} alt=""/>
                            <img className={classes.imgMobile} height='200' src={treatment} alt=""/>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default MakeAppointments;
