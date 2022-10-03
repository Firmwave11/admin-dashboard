import React from 'react';
// material-ui
import { Button, Grid, Typography } from '@mui/material';

// project import
import OrdersTable from '../dashboard/OrdersTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const LocationDefault = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 3 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item />
                    <Button>Tambah +</Button>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable fromProductType />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default LocationDefault;
