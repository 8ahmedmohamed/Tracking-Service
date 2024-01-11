import React from 'react';

//translation
import { useTranslation } from "react-i18next";

import { Typography } from '@mui/material';

import Trackingdetails from '../Trackingdetails/Trackingdetails';

import './Trackingtable.css'

const Trackingtable = ({ trackingData }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            {trackingData.length > 0 ?
            <Trackingdetails trackingData={trackingData}/> :
            <Typography component={'h2'} className='d-flex justify-content-center'>{t('No Details Found')}</Typography>}
        </React.Fragment>
    )
}

export default Trackingtable