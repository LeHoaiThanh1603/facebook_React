import Dialog from '@mui/material/Dialog';
import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { LoginApi } from '../../../../requestApi/LoginApi';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../AuthSlice';

function Copyright(props) {


    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function Register({ openSignUp, closeSignUp }) {


    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        closeSignUp(false);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const form = {
            username: data.get('username'),
            password: data.get('password'),
            fullname: data.get('fullname'),
            gender: data.get('gender'),
            nickname: data.get('nickname'),
            website: data.get('website'),
        }
        const dataApi = await LoginApi.register('/register', form)
        console.log(dataApi)
        try {
            const userData = await LoginApi.checkRegisterByToken('/check')
            console.log(userData)
            dispatch(registerSuccess(userData.data))
        } catch (error) {

        }

    };

    return (
        <div>
            <Dialog
                open={openSignUp}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >


                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="User Name"
                                    name="username"
                                    autoComplete="email"
                                    autoFocus

                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="PassWord"
                                    name="password"
                                    type="password"
                                    autoComplete="email"
                                    autoFocus

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="fullname"
                                    label="Full Name"
                                    id="password"
                                    autoComplete="current-password"

                                />
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="nickname"
                                    label="Nick Name"
                                    id="password"
                                    autoComplete="current-password"

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="website"
                                    label="Website"
                                    id="password"
                                    autoComplete="current-password"

                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign up
                                </Button>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </ThemeProvider>

            </Dialog>
        </div>
    );
}

export default Register;