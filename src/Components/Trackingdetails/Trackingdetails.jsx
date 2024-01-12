import React, { useEffect, useState } from 'react';

//translation
import { useTranslation } from "react-i18next";

import { Grid, Typography } from '@mui/material';

import './Trackingdetails.css'

const Trackingdetails = ({ trackingData }) => {
    const { t } = useTranslation();
    const [orderState, setOrderState] = useState('');

    useEffect(() => {
        if (Object.keys(trackingData).length) {
            if (trackingData.CurrentStatus.state === "DELIVERED") setOrderState('delivered')
            else if (trackingData.CurrentStatus.state === "DELIVERED_TO_SENDER") setOrderState('waiting')
            else if (trackingData.CurrentStatus.state === "CANCELLED") setOrderState('cancelled')
        }
    }, [trackingData])

    return (
        <React.Fragment>
            <Grid container sx={{ justifyContent: 'space-around', borderBottom: '1px solid #EEEE', paddingBottom: '25px' }}>
                <Grid item xl={3} className='d-flex justify-content-center align-items-center flex-column gap-2'>
                    <Typography>{`${t('Order_Number')} ${trackingData?.TrackingNumber ? trackingData?.TrackingNumber : ''}`}</Typography>
                    <Typography variant='p' className={`${orderState}`}>{t(trackingData?.CurrentStatus?.state)}</Typography>
                </Grid>
                <Grid item xl={3} className='d-flex justify-content-center align-items-center flex-column gap-2'>
                    <Typography>{t('Last_Update')}</Typography>
                    <Typography variant='p'>{t(trackingData?.CurrentStatus?.timestamp?.split('T')[0])}</Typography>
                </Grid>
                <Grid item xl={3} className='d-flex justify-content-center align-items-center flex-column gap-2'>
                    <Typography>{t('Shipper_Name')}</Typography>
                    <Typography variant='p'>{t(trackingData?.provider)}</Typography>
                </Grid>
                <Grid item xl={3} className='d-flex justify-content-center align-items-center flex-column gap-2'>
                    <Typography>{t('Delivered_Date')}</Typography>
                    <Typography variant='p'>{t(trackingData?.PromisedDate?.split('T')[0])}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Trackingdetails
