import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

//translation
import { useTranslation } from "react-i18next";

import './Tackingbar.css';

const Trackingbar = ({ trackingData }) => {
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
            <Box className="wizard-progress">
                <Box className={`step created ${orderState}`}>
                    <Box className="node"></Box>
                    {t('Order_Is_Created')}
                </Box>
                <Box className={`step recieved ${orderState}`}>
                    <Box className="node"></Box>
                    {t('Order_Is_Recieved_From_Shipper')}
                </Box>
                <Box className={`step in-progress ${orderState}`}>
                    <Box className="node"></Box>
                    {t('Order_Is_Out_For_Delivery')}
                    {Object.keys(trackingData).length && trackingData.TransitEvents.length ?
                        <Typography variant={'span'} style={{ color: 'red', fontSize: '0.75rem' }}>
                            {trackingData?.TransitEvents[trackingData.TransitEvents.length - 1]?.reason}
                        </Typography> : ''}
                </Box>
                <Box className={`step not-complete ${orderState}`}>
                    <Box className="node"></Box>
                    {t('Delivered')}
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Trackingbar