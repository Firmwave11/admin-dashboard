import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

function createData(trackingNo, name, fat, carbs, protein) {
    return { trackingNo, name, fat, carbs, protein };
}

const rows = [
    createData(84564564, 'Camera Lens', 40),
    createData(98764564, 'Laptop', 300),
    createData(98756325, 'Mobile', 355),
    createData(98652366, 'Handset', 50),
    createData(13286564, 'Computer Accessories', 100),
    createData(86739658, 'TV', 99),
    createData(13256498, 'Keyboard', 125),
    createData(98753263, 'Mouse', 89),
    createData(98753275, 'Desktop', 185),
    createData(98753291, 'Chair', 100)
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Tracking No.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Product Name'
    },
    {
        id: 'fat',
        align: 'right',
        disablePadding: false,
        label: 'Quantity'
    }
];

const headUserCell = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Id'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'User'
    },
    {
        id: 'fat',
        align: 'right',
        disablePadding: false,
        label: 'Role'
    }
];

const headLocationCell = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Id'
    },
    {
        id: 'Area',
        align: 'left',
        disablePadding: true,
        label: 'User'
    },
    {
        id: 'fat',
        align: 'right',
        disablePadding: false,
        label: 'Warehouse'
    }
];

const headProductTypeCells = [
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Id'
    },
    {
        id: 'Area',
        align: 'left',
        disablePadding: true,
        label: 'Type Produk'
    },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ fromProductType, fromLocation, fromuser, order, orderBy }) {
    let tempHead = [];
    if (fromuser) {
        tempHead = headUserCell;
    }else if (fromLocation){
        tempHead = headLocationCell;
    }else if(fromProductType){
        tempHead = headProductTypeCells
    }
    else{
        tempHead = headCells
    }
    return (
        <TableHead>
            <TableRow>
                {tempHead.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {/* <Dot color={color} />
            <Typography>{title}</Typography> */}
            <Button>Edit</Button>
            <Button variant="outlined" color="error">
                Delete
            </Button>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable(props) {
    console.log(props.fromUser);
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

    //data hardcode dummy
    const rowUser = [
        createData(84564564, 'Faiz', 'Admin Super'),
        createData(98764564, 'Resha', 'Admin'),
        createData(98756325, 'Rama', 'Admin')
    ];

    const rowArea = [
        createData(84564564, 'Jakarta', 'Gudang A'),
        createData(98764564, 'Bogor', 'Gudang B'),
        createData(98756325, 'Bekasi', 'Gudang C')
    ];

    const rowProductType = [
        createData(84564564, 'Kendaraan'),
        createData(98764564, 'Sparepart'),
        createData(98756325, 'Unit')
    ]


    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead fromProductType={props.fromProductType} fromLocation={props.fromLocation} fromuser={props.fromUser} order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort( props.fromProductType ? rowProductType : props.fromLocation ? rowArea : props.fromUser ? rowUser : rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.trackingNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.trackingNo}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.trackingNo}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="left">
                                        <OrderStatus status={row.carbs} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
