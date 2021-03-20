import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#F2F2F2',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '10%',
        paddingBottom: '20px',
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
        fontSize: '18px',
        marginBottom: '30px'
    },
    items: {
        margin: '5px 0px',
        color: '#707070',
    },
    socialMedia: {
        margin: '20px 0px',
    },
    copyRight: {
        textAlign: 'center',
        marginTop: '50px'
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.paper}>
                        <p className={classes.title}><strong>Services</strong></p>
                        <Box className={classes.items}>
                            <small>Emergency Dental Care</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Check Up</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Treatment of Personal Diseases</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Tooth Extraction</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Check Up</small>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.paper}>
                        <p className={classes.title}><strong>Oral HealthServices</strong></p>
                        <Box className={classes.items}>
                            <small>Emergency Dental Care</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Check Up</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Treatment of Personal Diseases</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Tooth Extraction</small>
                        </Box>
                        <Box className={classes.items}>
                            <small>Check Up</small>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.paper}>
                        <p className={classes.title}><strong>Our Address</strong></p>
                        <Box className={classes.items}>
                            <small>Dhaka, Bangladesh</small>
                        </Box>
                        <Box className={classes.socialMedia}>
                            <Box>
                                <img height='40' src="https://img.icons8.com/fluent/50/000000/facebook-new.png"/>
                                <img height='40' src="https://img.icons8.com/fluent/48/000000/linkedin-circled.png"/>
                                <img height='40' src="https://img.icons8.com/color/48/000000/twitter-circled--v4.png"/>
                            </Box>
                        </Box>
                        <Box className={classes.items}>
                            <img height='20' src="https://img.icons8.com/fluent/48/000000/email-open.png"/>
                            <small>&nbsp; email@gmail.com</small>
                        </Box>
                        <Box className={classes.items}>
                            <img height='20' src="https://img.icons8.com/color/48/000000/cell-phone.png"/>
                            <small>&nbsp; +880 171141447</small>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid className={classes.copyRight} item xs={12}>
                    <Typography variant='body2'>Copyright {new Date().getFullYear()} All Right Reserved</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
