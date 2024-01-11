import React, { useEffect, useState } from 'react';

// Material UI
import { Box, Grid } from '@mui/material';

import axios, { AxiosError } from 'axios';

import { toast } from 'react-toastify';

import Trackingbar from '../../../Components/Trackingbar/Trackingbar';
import Trackingtable from '../../../Components/Trackingtable/Trackingtable';

import './Home.css'

const Home = () => {
    const [trackingData, setTrackingData] = useState([]);
    const trackNumber = localStorage.getItem('trackNumber');

    useEffect(() => {
        trackNumber && getServiceDetails(trackNumber);
    }, [trackNumber])

    const getServiceDetails = async (id) => {
        try {
            const response = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
            console.log(response.data.TransitEvents);
            setTrackingData(response.data.TransitEvents);
        } catch (err) {
            if (err && err instanceof AxiosError) {
                toast.error(err?.response?.data?.error ? err.response.data.error : err.message, { position: toast.POSITION.TOP_RIGHT });
            }
        }
        localStorage.removeItem('trackNumber')
    };

    return (
        <React.Fragment>
            <Box className="container-fluid" sx={{ marginTop: '130px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px', padding: '25px', border: '1px solid #EEEE', borderRadius: '15px', margin: '0px 75px' }}>
                    <Grid container spacing={2} sx={{ borderBottom: '1px solid #EEEE' }}>
                        <Grid item xl={3} className='d-flex justify-content-center align-items-center'>ssds</Grid>
                        <Grid item xl={3} className='d-flex justify-content-center align-items-center'>sddasd</Grid>
                        <Grid item xl={3} className='d-flex justify-content-center align-items-center'>sdsads</Grid>
                        <Grid item xl={3} className='d-flex justify-content-center align-items-center'>ddsad</Grid>
                    </Grid>
                    <Trackingbar />
                </Box>
                <Grid container spacing={2} className='mt-5'>
                    <Grid item xl={8}>
                        <Trackingtable trackingData={trackingData} />
                    </Grid>
                    <Grid item xl={4}></Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Home;
