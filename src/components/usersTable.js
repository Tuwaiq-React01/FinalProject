import React from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const usersTable = (props) => {

    return (
        <React.Fragment>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell> Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.users.length > 0 ? (
                        props.users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell> {user.name}</TableCell>
                                <TableCell>
                                    <button type="button" className="btn btn-danger" onClick={() => props.deleteUser(user.id)}>Delete</button>
                                    <button type="button" className="btn btn-dark" onClick={() => props.editRow(user)} >Edit</button>
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
    )
}

export default usersTable
