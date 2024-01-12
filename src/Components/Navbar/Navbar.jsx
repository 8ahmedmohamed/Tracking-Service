import React, { useEffect, useState } from 'react';

//translation
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

// React Router
import { Link, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import Bosta from '../../assets/logo.png';
import ArabicBosta from '../../assets/arabic logo.png';

import './Navbar.css'

const Navbar = (props) => {
    const { t } = useTranslation();
    const [trackNumber, setTrackNumber] = useState('');
    const htmlRoot = document.querySelector("html");
    const Navigate = useNavigate()
    localStorage.access_token = Math.random().toString(36).substring(2);

    const LanguageHandling = () => {
        localStorage.LANG = localStorage.LANG === 'ar' ? 'en' : 'ar';
        props.setDirection(localStorage.LANG === "en" ? 'left' : 'right');
        htmlRoot.setAttribute("dir", localStorage.LANG === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", localStorage.LANG === "en" ? "en" : "ar");
        i18next.changeLanguage(localStorage.LANG).then();
    };

    useEffect(() => {
        props.setDirection(localStorage.LANG === "en" ? 'left' : 'right');
        htmlRoot.setAttribute("dir", localStorage.LANG === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", localStorage.LANG === "en" ? "en" : "ar");
        i18next.changeLanguage(localStorage.LANG).then();

        const track = document.getElementById('trackShipment')
        const trackBox = document.getElementById('trackBox')
        track.addEventListener("mouseover", () => {
            document.getElementById("trackBox").classList.remove('d-none');
        });
        track.addEventListener('mouseout', () => {
            document.getElementById("trackBox").classList.add('d-none');
        });

        trackBox.addEventListener('mouseover', () => {
            document.getElementById("trackBox").classList.remove('d-none');
        });
        trackBox.addEventListener('mouseout', () => {
            document.getElementById("trackBox").classList.add('d-none');
        });
    }, [htmlRoot, props]);

    const SendTrackNumber = () => {
        localStorage.setItem('trackNumber', trackNumber);
        setTrackNumber('');
        document.getElementById("trackBox").classList.add('d-none');
        Navigate('/Tracking/Tracking');
    }

    const LogOut = () => {
        localStorage.removeItem('access_token');
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg border-body" data-bs-theme="dark">
                <Box className="container-fluid p-0">
                    <Link to='/' type='button'><img style={{ width: '110px' }} src={localStorage.LANG === 'en' ? Bosta : ArabicBosta} alt='Bosta' /></Link>
                    <Box className="sections">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-5">
                            <li className="nav-item">
                                <Link to='/' type='button'>{t('Main')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' type='button'>{t('Prices')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' type='button'>{t('Call_Sales')}</Link>
                            </li>
                        </ul>
                    </Box>
                    <Box className="settings d-flex align-items-center gap-5">
                        <Box className='track mx-2 d-flex gap-1'>
                            <button id='trackShipment' className='btn'>{t('Track_Shipment')}</button>
                            <Box id='trackBox' className="d-none">
                                <Typography component={'h5'} className='SearchTitle'>{t('Track_Your_Shipment')}</Typography>
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
                        </Box>
                        {localStorage.getItem('access_token').length > 0 ?
                            <Link to='/login' type='button' onClick={LogOut}>{t('Log_Out')}</Link> :
                            <Link to='/login' type='button'>{t('Sign_Up')}</Link>
                        }
                        <Box className='lang mx-2 d-flex gap-1' onClick={LanguageHandling}>
                            <Box component='p' className='mb-0'>{t('Lang')}</Box>
                        </Box>
                    </Box>
                </Box>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
