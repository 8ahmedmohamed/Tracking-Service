import React from 'react';

//translation
import { useTranslation } from "react-i18next";

import { Typography } from '@mui/material';

import Trackingevents from '../Trackingevents/Trackingevents';

const Trackingtable = ({ trackingData }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            {Object.keys(trackingData).length && trackingData.TransitEvents.length ?
                <Trackingevents trackingData={trackingData.TransitEvents} /> :
                <Typography variant={'h5'} className='d-flex justify-content-center'>{t('No_Details_Found')}</Typography>}
        </React.Fragment>
    )
}

export default Trackingtable