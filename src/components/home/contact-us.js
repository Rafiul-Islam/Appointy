import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Box, Button,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@material-ui/core";

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
    margin: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.title}>Contact Us</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={6} justify='center'>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            labelWidth={60}
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Subject</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            labelWidth={60}
                        />
                    </FormControl>
                    <TextField
                        fullWidth
                        className={classes.margin}
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <Box>
                        <Button
                            fullWidth
                            className={classes.margin}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Send
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactUs;
