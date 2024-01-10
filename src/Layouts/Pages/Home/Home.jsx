import React, { useEffect, useState } from 'react';

// Material UI
import { Box } from '@mui/material';

import Card from '../../../Components/Card/Card';

import axios, { AxiosError } from 'axios';

import { toast } from 'react-toastify';

const Home = () => {
    const [trackingData, setTrackingData] = useState([]);
    const trackNumber = localStorage.getItem('trackNumber');

    useEffect(() => {
        trackNumber && getServiceDetails(trackNumber);
    }, [trackNumber])

    const getServiceDetails = async (id) => {
        try {
            const response = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
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
            <Box className="container-fluid mt-5">
                <button className='btn btn-primary' type='button' onClick={() => { getServiceDetails(67151313) }}>Get Data</button>
                <div className="d-flex justify-content-center flex-wrap gap-4 my-2">
                    {trackingData.length > 0 && trackingData.map((item, index) => {
                        return (
                            <Box key={index}>
                                <Card item={item} />
                            </Box>
                        )
                    })}
                </div>
            </Box>
        </React.Fragment>
    )
}

export default Home;
