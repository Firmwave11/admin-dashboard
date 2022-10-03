import React from 'react';
// material-ui
import { Button, Grid, Typography, Modal, Fade, Box, Backdrop, TextField, Select, MenuItem, InputLabel } from '@mui/material';

// project import
import OrdersTable from '../dashboard/OrdersTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const LocationDefault = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#FFFFFF',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const modalStyles = {
        inputFields: {
            margin: 5,
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 3 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="flex-end">
                    <Grid item />
                    <Button onClick={handleOpen}>Tambah +</Button>
                    <Button>Lihat Draft</Button>
                    <Button variant="contained" color="success">
                        Export
                    </Button>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable />
                </MainCard>
            </Grid>
            <div>
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"

                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box style={style} >
                            <Typography mt={2} ml={2} variant="h4" component="h4">
                                Tambah Produk
                            </Typography>;

                            <Box sx={modalStyles.inputFields}>
                                <TextField
                                    placeholder="Nama Produk"
                                    name="Produk"
                                    label="Produk"
                                    required
                                />
                                <InputLabel id="demo-simple-select-label">Jenis Produk</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Tipe Produk"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Parts</MenuItem>
                                    <MenuItem value={20}>Unit</MenuItem>
                                    <MenuItem value={30}>Component</MenuItem>
                                </Select>
                                <Box mt={2} />
                                <TextField placeholder="Jumlah" mt={2} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                                <Button>Simpan sebagai Draft</Button>
                                <Button variant="contained" color="success">
                                    Simpan
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </Grid>
    );
};

export default LocationDefault;
