import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import doctor from '../assets/svg/top-main/doctor.svg'
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginLeft: '20px',
        color: '#546e7a'
    },
    appBar: {
        paddingLeft: '30px',
        background: '#fff',
        height: '70px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
        },
    }
}));

const Navigations = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.toolBar} onClick={() => history.push('/home')} style={{cursor: 'pointer'}}>
                    <img height='40' src={doctor} alt=""/>
                    <Typography className={classes.title} variant="h5">
                        <strong>Appointy</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigations;

