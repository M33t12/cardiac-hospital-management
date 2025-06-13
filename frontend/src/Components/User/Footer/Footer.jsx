import React from 'react';
import { Avatar, Box, Chip, Container, Divider, Grid, Stack, styled, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

import img from "../../User/assets/logo2.png"

import { pink } from '@mui/material/colors';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { height } from '@mui/system';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

// copyright function for generate year automatically
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Developed by '}
            <strong><a className='text-style' href="#" target="_blank" rel="noreferrer noopener">HealthCare Plus</a> </strong>{'Copyright ©'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <footer>
            <Box className='sticky-container' sx={{ bgcolor:'red', color: 'white', mt:3 , pb: 2, top: 'auto' }}>
                <Container maxWidth="xl">
                    <Grid container
                        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
                                > 
                                <img src={img} alt="logo hospital" style={{height:"40px", width:"40px", margin:"5px"}} srcset="" />
                                    HealthCare Plus Hospital
                                </Typography>
                                <Divider />
                            </Box>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mt: 1, bgcolor: 'black' }}>
                                    <LocationOnIcon />
                                </Avatar><span>Anand, India</span>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: 'black' }}>
                                    <EmailIcon />
                                </Avatar>
                                <a className='text-style' style={{ color: 'white' }} href="mailto:cardiahospital@gmail.com">
                                    cardiahospital@gmail.com
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: 'black' }}>
                                    <CallIcon />
                                </Avatar>
                                <a className='text-style' href="tel:01680xxx86">
                                +91-9862164447
                                </a>
                            </Stack >


                        </Grid>

                        {/* ----------service part ---------------*/}
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Our Services" />
                                </Divider>
                            </Root>

                            <Box sx={{ p: 2 }}><NavLink className='text-style' to='/doctor' color='inherit'>Find a Doctor</NavLink></Box>

                            <Box sx={{ p: 2 }}><NavLink className='text-style' to='/services' color='inherit'>All services</NavLink></Box>

                            <Box sx={{ p: 2 }}><NavLink className='text-style' to='/doctor' color='inherit'>Make An Appointment</NavLink></Box>

                            <Box sx={{ p: 2 }}><NavLink className='text-style' to='/contact' color='inherit'>Contact Us </NavLink></Box>
                        </Grid>

                        {/* ----------social media part ------------*/}

                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Find us on social media" />
                                </Divider>
                            </Root>

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: 'black' }}>
                                    <FacebookIcon />
                                </Avatar>
                                <a className='text-style' href="#" target="_blank" rel="noopener noreferrer" >
                                    Facebook
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: 'black' }}>
                                    <LinkedInIcon />
                                </Avatar>
                                <a className='text-style' href="#" target="_blank" rel="noopener noreferrer" >
                                    LinkedIn
                                </a>
                            </Stack >

                            <Stack direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1} >
                                <Avatar sx={{ mb: 1, bgcolor: 'black' }}>
                                    <GitHubIcon />
                                </Avatar>
                                <a className='text-style' href="#" target="_blank" rel="noopener noreferrer" >
                                    GitHub
                                </a>
                            </Stack >


                        </Grid>

                    </Grid>
                    <Divider sx={{ mb: 2 }} />
                    <Copyright sx={{ mt: 5 }} />

                </Container>
            </Box>

        </footer >
    );
};

export default Footer;