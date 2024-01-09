import React from 'react';

//translation
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

// React Router
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import Bosta from '../../assets/logo.png'

const Navbar = (props) => {
    const { t } = useTranslation();
    const htmlRoot = document.querySelector("html");

    const LanguageHandling = () => {
        localStorage.LANG = localStorage.LANG === 'ar' ? 'en' : 'ar';
        props.setDirection(localStorage.LANG === "en" ? 'left' : 'right');
        htmlRoot.setAttribute("dir", localStorage.LANG === "en" ? "ltr" : "rtl");
        htmlRoot.setAttribute("lang", localStorage.LANG === "en" ? "en" : "ar");
        i18next.changeLanguage(localStorage.LANG).then();
    };

    const LogOut = () => {
        localStorage.removeItem('access_token');
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to='/' type='button'><img style={{ width: '100px' }} src={Bosta} alt='Bosta' /></Link>
                    <div className="sections">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-5">
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
                        </div>
                    </div>
                    <div className="settings d-flex">
                        <Box className='lang mx-2 d-flex gap-1' onClick={LanguageHandling}>
                            <i className="bi bi-translate"></i>
                            <Box component='p' className='mb-0'>{t('Lang')}</Box>
                        </Box>
                        <Link to='/login' type='button' onClick={LogOut}>Log Out</Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
