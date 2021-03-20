import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import clock from '../../assets/svg/features/clock.svg'
import placeholder from '../../assets/svg/features/placeholder.svg'
import contact from '../../assets/svg/features/phone-call.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#F2F2F2',
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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '10px',
        paddingBottom: '20px'
    },
    cardContent: {
        marginTop: '15px',
    },
    cardTitle:{
        color: '#525252'
    }
}));

const Features = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Box>
                            <img height='50' src={clock} alt=""/>
                        </Box>
                        <Box className={classes.cardContent}>
                            <Typography className={classes.cardTitle} variant='h6'>Opening Hours</Typography>
                            <Typography variant='body2'>open 24 hours a day and 7 days a week.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Box>
                            <img height='50' src={placeholder} alt=""/>
                        </Box>
                        <Box className={classes.cardContent}>
                            <Typography className={classes.cardTitle} variant='h6'>Visit our location</Typography>
                            <Typography variant='body2'>Qazi Nuruzzaman Sarak West, Dhaka</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Box>
                            <img height='50' src={contact} alt=""/>
                        </Box>
                        <Box className={classes.cardContent}>
                            <Typography className={classes.cardTitle} variant='h6'>Contact Us</Typography>
                            <Typography variant='body2'>+880 171141447</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Features;
