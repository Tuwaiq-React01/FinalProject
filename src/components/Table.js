import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Actions</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.length > 0 ? (
                        props.users.map(user => (
                            <TableRow>
                                <TableCell>{user.username}</TableCell>
                                <TableCell> {user.name}</TableCell>
                                <TableCell>
                                    {/* <button type="button" class="btn btn-danger" onClick={() => props.deleteUser(user.id)}>Delete</button>
                                    <button type="button" class="btn btn-dark" onClick={() => props.editRow(user)} >Edit</button> */}
                                </TableCell>
                            </TableRow>
                        ))) : (
                        <TableRow>
                            <TableCell> No Data</TableCell>
                        </TableRow>
                    )
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    );
}