import React, { useEffect, useState } from 'react';

//translation
import { useTranslation } from "react-i18next";

// Material UI
import { Box, Grid, Typography } from '@mui/material';

import axios, { AxiosError } from 'axios';

import { toast } from 'react-toastify';

import Trackingbar from '../../../Components/Trackingbar/Trackingbar';
import Trackingtable from '../../../Components/Trackingtable/Trackingtable';
import Trackingdetails from '../../../Components/Trackingdetails/Trackingdetails';

//loading
import Loading from '../../../Components/Loading/Loading';

import askProblem from '../../../assets/askproblem.png'

import './Tracking.css'

const Tracking = () => {
    const { t } = useTranslation();
    const [trackingData, setTrackingData] = useState({});
    const trackNumber = localStorage.getItem('trackNumber');

    useEffect(() => {
        trackNumber && getServiceDetails(trackNumber);
    }, [trackNumber])

    const getServiceDetails = async (id) => {
        try {
            const response = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
            setTrackingData(response.data);
        } catch (err) {
            if (err && err instanceof AxiosError) {
                toast.error(err?.response?.data?.error ? err.response.data.error : err.message, { position: toast.POSITION.TOP_RIGHT });
            }
        }
    };

    return (
        <React.Fragment>
            {Object.keys(trackingData).length ?
                <Box className="container-fluid" sx={{ marginTop: '130px', marginBottom: '50px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px', padding: '25px 0', border: '1px solid #EEEE', borderRadius: '15px', margin: '0px 75px' }}>
                        <Trackingdetails trackingData={trackingData} />
                        <Trackingbar trackingData={trackingData} />
                    </Box>
                    <Grid container className='mt-5 gap-5 justify-content-center'>
                        <Grid item xs={7.5}>
                            <Trackingtable trackingData={trackingData} />
                        </Grid>
                        <Grid item xs={4}>
                            <Box className='d-flex flex-column gap-2 mb-3'>
                                <Typography variant={'p'} className='d-flex' >{t('Delivered_Address')}</Typography>
                                {Object.keys(trackingData).length ?
                                    <Typography variant={'p'} className='d-flex' sx={{ padding: '20px', backgroundColor: '#FAFAFA', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '.9rem' }}>
                                        {t('Address of shipment will be addedd here in live aplication')}
                                    </Typography> : ''}
                            </Box>
                            <Box sx={{ padding: '20px', backgroundColor: '#FAFAFA', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '.9rem' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} className='d-flex justify-content-center'>
                                        <img src={askProblem} alt='askProblem' style={{ width: '80%' }} />
                                    </Grid>
                                    <Grid item xs={8} className='d-flex justify-content-center flex-column gap-2'>
                                        <Typography>{t('Is_There_A_Problem_In_Your_Problem?!')}</Typography>
                                        <button className='btn btn-danger px-4 py-2'>{t('Report_A_Problem')}</button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box> :
                <Loading />
            }
        </React.Fragment>
    )
}

export default Tracking;
