import React from 'react';

//translation
import { useTranslation } from "react-i18next";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import './Trackingevents.css'

const Trackingevents = ({ trackingData }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Typography variant={'p'} className='d-block mb-3'>{t('Order_Details')}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='trackTableHead'>
                        <TableRow>
                            <TableCell>{t('Branch')}</TableCell>
                            <TableCell>{t('Date')}</TableCell>
                            <TableCell>{t('Time')}</TableCell>
                            <TableCell>{t('Details')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='trackTableBody'>
                        {trackingData.length > 0 && trackingData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell >{row.hub}</TableCell>
                                <TableCell>{row.timestamp.split('T')[0]}</TableCell>
                                <TableCell>{row.timestamp.split('T')[1].split('.')[0]}</TableCell>
                                <TableCell>
                                    <Typography variant={'h6'}>{row.state}</Typography>
                                    <Typography variant={'span'} style={{ color: 'red' }}>{row.reason}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default Trackingevents