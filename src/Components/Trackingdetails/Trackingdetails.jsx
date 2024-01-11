import React from 'react';

//translation
import { useTranslation } from "react-i18next";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import './Trackingdetails.css'

const Trackingdetails = ({ trackingData }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Typography component={'h5'}>{t('Order_Details')}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='trackTableHead'>
                        <TableRow>
                            <TableCell>{t('Branch')}</TableCell>
                            <TableCell align="left">{t('Date')}</TableCell>
                            <TableCell align="left">{t('Time')}</TableCell>
                            <TableCell align="left">{t('Details')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='trackTableBody'>
                        {trackingData.length > 0 && trackingData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell >{row.hub}</TableCell>
                                <TableCell align="left">{row.timestamp.split('T')[0]}</TableCell>
                                <TableCell align="left">{row.timestamp.split('T')[1].split('.')[0]}</TableCell>
                                <TableCell align="left">
                                    <Typography component={'h6'}>{row.state}</Typography>
                                    <Typography component={'span'} style={{ color: 'red' }}>{row.reason}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default Trackingdetails