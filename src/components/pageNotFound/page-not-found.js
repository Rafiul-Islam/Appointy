import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import pageNotFound from '../../assets/img/404.jpg';
import pageNotFoundMobile from '../../assets/img/pnf.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#515151',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${pageNotFound})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '90px',
        [theme.breakpoints.down('md')]: {
            marginTop: '70px',
            backgroundImage: `url(${pageNotFoundMobile})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
    },
}));

const PageNotFound = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}></Box>
        </>
    );
};

export default PageNotFound;
