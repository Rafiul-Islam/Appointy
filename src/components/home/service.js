import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Paper, Typography} from "@material-ui/core";

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
        paddingBottom: '20px',
        boxShadow: 'none',
        background: 'transparent'
    },
    cardContent: {
        marginTop: '15px',
    },
    cardTitle: {
        color: '#525252',
        marginBottom: '20px',
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
    }
}));

const Service = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.title}>Services We Provide</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Box>
                            <img src="https://img.icons8.com/nolan/50/dental-braces.png"/>
                        </Box>
                        <Box className={classes.cardContent}>
                            <Typography className={classes.cardTitle} variant='h6'>Fluoride Treatment</Typography>
                            <Typography variant='body2'>
                                Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Box>
                            <img src="https://img.icons8.com/color/48/000000/skeleton.png"/>
                        </Box>
                        <Box className={classes.cardContent}>
                            <Typography className={classes.cardTitle} variant='h6'>Cavity Filling</Typography>
                            <Typography variant='body2'>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Box>
                            <img src="https://img.icons8.com/dusk/50/000000/tooth.png"/>
                        </Box>
                        <Box className={classes.cardContent}>
                            <Typography className={classes.cardTitle} variant='h6'>Teeth Whitening</Typography>
                            <Typography variant='body2'>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Service;
