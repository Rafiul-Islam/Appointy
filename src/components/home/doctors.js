import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Grid, Paper, Typography} from "@material-ui/core";
import doctorImg from '../../assets/svg/top-main/doctor.svg'
import {useHistory} from "react-router";
import loadingGif from '../../assets/gif/loading.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#F2F2F2',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '200px',
        fontFamily: "Poppins",
        [theme.breakpoints.down('sm')]: {
            paddingTop: '25%',
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: '50px'
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '10px',
        paddingBottom: '20px'
    },
    cardRight: {
        marginLeft: '0px'
    },
    bnt: {
        marginTop: '20px'
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
    doctorInfo: {
        textAlign: 'left'
    }
}));

const Doctors = () => {
    const classes = useStyles();
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:8000/doctors")
            .then((res) => res.json())
            .catch((err) =>
                fetch("db.json")
                    .then((res) => res.json())
                    .then((data) => data.doctors)
            )
            .then((data) => {
                setDoctors(data)
                setLoading(false)
            });
    }, [])

    const getAppointmentHandler = (doctor) => {
        history.push({
            pathname: `/doctor/${doctor.id}`,
            state: {detail: doctor}
        })
    }
    const doctorsView = doctors && doctors.map((doctor, index) =>
        <Grid item xs={12} sm={4} key={index}>
            <Paper className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <img height='80' src={doctorImg}/>
                    </Grid>
                    <Grid className={classes.cardRight} item xs={8}>
                        <Box className={classes.doctorInfo}>
                            <Typography variant='h6'>{doctor.name}</Typography>
                            <small>{doctor.org}</small>
                            <Button
                                className={classes.bnt}
                                variant='contained' color="secondary"
                                onClick={getAppointmentHandler.bind(this, doctor)}
                            >
                                <small>Get Appointment</small>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.title}>Our Doctors</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5} justify='center'>
                {doctorsView}
                {loading && <img height='80' src={loadingGif} alt="loading"/>}
            </Grid>
        </div>
    );
};

export default Doctors;
