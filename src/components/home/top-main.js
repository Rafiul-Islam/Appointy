import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import doctorPatient from '../../assets/svg/top-main/doctor-patient.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '100vh',
        background: '#F2F2F2',
        paddingTop: '10%',
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
        fontSize: '45px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px',
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
    }
}));
const TopMain = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.leftBox}>
                        <Typography className={classes.title}>
                            <strong>Your New Smile <br/> Starts Here</strong>
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Oral health is a key indicator of overall health, well-being and quality of life. It
                            encompasses a range of diseases and conditions that include dental caries, Periodontal
                            disease, Tooth loss, Oral cancer and birth defects such as cleft lip and palate.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.rightBox}>
                        <img className={classes.imgWeb} height='350' src={doctorPatient} alt=""/>
                        <img className={classes.imgMobile} height='200' src={doctorPatient} alt=""/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default TopMain;
