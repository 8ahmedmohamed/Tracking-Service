import React, { useState } from 'react';

//translation
import { useTranslation } from "react-i18next";

// React Router
import { useNavigate } from 'react-router-dom';

// Material UI
import { Box, Typography } from '@mui/material';

import background from '../../../assets/background.png'

import './Home.css'

const Home = () => {
    const { t } = useTranslation();
    const [trackNumber, setTrackNumber] = useState('');
    const Navigate = useNavigate();

    const SendTrackNumber = () => {
        localStorage.setItem('trackNumber', trackNumber);
        setTrackNumber('');
        document.getElementById("trackBox").classList.add('d-none');
        Navigate('/Tracking/Tracking');
    }

    return (
        <React.Fragment>
            <Box className="container-fluid d-flex gap-3 align-items-center flex-column p-0" sx={{ maxHeight: '100vh' }}>
                <Box className='d-flex gap-5 align-items-center flex-column' sx={{ width: '100%', padding: '130px 50px 50px', backgroundColor: '#F3FAFB' }}>
                    <Typography variant='h4'>{t('Stay updated and track your shipment with Bosta')}</Typography>
                    <Typography variant='h4'>{t('Track your shipment')}</Typography>
                </Box>
                <Box id='trackSearch'>
                    <Box className="input-group">
                        <input type="text" className="form-control " placeholder={t('Tracking_No')}
                            value={trackNumber} onChange={(e) => { setTrackNumber(e.target.value); }}
                            onKeyDown={(e) => { e.key === 'Enter' && SendTrackNumber() }} />
                        <Box className="input-group-append">
                            <button className="btn bg-danger" type="button" onClick={SendTrackNumber}>
                                <i className="bi bi-search"></i>
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', paddingTop: '130px', backgroundColor: '#F3FAFB' }}>
                    <img src={background} alt='background' style={{ width: '100%' }} />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Home;
