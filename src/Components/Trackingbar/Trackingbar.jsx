import React from 'react';

import { Box } from '@mui/material';

//translation
import { useTranslation } from "react-i18next";

import './Tackingbar.css';

const Trackingbar = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Box className="wizard-progress">
                <Box className="step complete">
                    <Box className="node"></Box>
                    {t('Order_Is_Created')}
                </Box>
                <Box className="step complete">
                    <Box className="node"></Box>
                    {t('Order_Is_Recieved_From_Shipper')}
                </Box>
                <Box className="step in-progress">
                    <Box className="node"></Box>
                    {t('Order_Is_Out_For_Delivery')}
                </Box>
                <Box className="step not-complete">
                    <Box className="node"></Box>
                    {t('Delivered')}
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Trackingbar