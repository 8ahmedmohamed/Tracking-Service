import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

const Card = ({ item }) => {
    return (
        <React.Fragment>
            <Box className="card" style={{ width: '18rem' }} >
                <img src={Logo} className="card-img-top" style={{ padding: '25px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={'/'} className="btn btn-primary">Go somewhere</Link>
                </div>
            </Box>
        </React.Fragment>
    )
}

export default Card