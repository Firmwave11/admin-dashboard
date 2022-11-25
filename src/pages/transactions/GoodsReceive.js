import React from 'react';
// material-ui
import { Button, Grid, Typography, Modal, Fade, Box, Backdrop, TextField, Select, MenuItem, InputLabel, FormControl, } from '@mui/material';

// project import
import OrdersTable from '../dashboard/OrdersTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const LocationDefault = () => {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const [age, setAge] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
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
                    <Grid item md={6} lg={6} xs={6}>
                        <Button onClick={handleOpen}>Tambah +</Button>
                        <Button>Lihat Draft</Button>
                        <Button variant="contained" color="success">
                            Export
                        </Button>
                    </Grid>
                    <Grid item md={6} lg={6} xs={6} justifyContent="flex-end" container>
                        <FormControl size="small" style={{ width: 100 }}>
                            <Select
                                variant="outlined"
                                name="evaluasi"
                            // onChange={handleChangeDropdown}
                            >
                                <MenuItem value={10}>Tracking No.</MenuItem>
                                <MenuItem value={20}>Product Name</MenuItem>
                                <MenuItem value={30}>Quantity</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="search"
                            label="Search"
                            type="search"
                            name="search"
                            size="small"
                            variant="outlined"
                        // onChange={handleChangeSearch}
                        />
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                        // onClick={handleSearchFilter}
                        >Search</Button>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable openEdit={handleOpenEdit}/>
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
                            </Typography>

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
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Tipe Location"
                                    onChange={handleChangeLocation}
                                >
                                    <MenuItem value={10}>Gudang A</MenuItem>
                                    <MenuItem value={20}>Gudang B</MenuItem>
                                    <MenuItem value={30}>Gudang C</MenuItem>
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
            <div>
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    open={openEdit}
                    onClose={handleCloseEdit}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openEdit}>
                        <Box style={style} >
                            <Typography mt={2} ml={2} variant="h4" component="h4">
                                Edit Produk
                            </Typography>
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
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Tipe Location"
                                    onChange={handleChangeLocation}
                                >
                                    <MenuItem value={10}>Gudang A</MenuItem>
                                    <MenuItem value={20}>Gudang B</MenuItem>
                                    <MenuItem value={30}>Gudang C</MenuItem>
                                </Select>
                                <Box mt={2} />
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection:"column" }}>
                                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={status}
                                            label="Tipe Location"
                                            sx={{ height: 39, width: 250}}
                                            onChange={handleChangeStatus}

                                        >
                                            <MenuItem value={10}>Good Issue</MenuItem>
                                            <MenuItem value={20}>Return GR</MenuItem>
                                            <MenuItem value={30}>Return GI</MenuItem>
                                            <MenuItem value={40}>Product Service</MenuItem>
                                            <MenuItem value={50}>Product Disposal</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection:"column" }}>
                                    <InputLabel id="demo-simple-select-label"> Jumlah</InputLabel>
                                    <TextField sx={{ width: 70}} margin='none' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                                    </Box>
                                </Box>
                                <Box mt={2} />
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
