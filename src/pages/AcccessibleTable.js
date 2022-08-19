import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import useEmployees from '../hook/useEmployees';
import { TextField } from '@mui/material';



export default function AcccessibleTable() {


    const [employees, setEmployees] = useEmployees();

    const handleSearchBox = (e) => {
        const searchText = e.target.value;
        if (searchText) {
            const searchEmployee = employees.filter(employee => employee.first_name.toLowerCase() === searchText.toLowerCase())
            if (searchEmployee) {
                setEmployees(searchEmployee)
            }
            else {
                setEmployees([])
            }
        }


    }

    return (
        <>
            <TextField onChange={handleSearchBox} style={{ margin: '30px', width: '800px' }} label="Search" color="primary" placeholder='Please input here...' />
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 1000 }} aria-label="caption table">

                    <TableHead>
                        <TableRow>
                            <TableCell >Id</TableCell>
                            <TableCell >First name</TableCell>
                            <TableCell >Last name</TableCell>
                            <TableCell >Date of birth</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Date of joning</TableCell>
                            <TableCell >Salary</TableCell>
                            <TableCell >Designation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (

                            <TableRow key={employee?.id}>
                                <TableCell>
                                    <Link to={`/employee/${employee.id}`}>{employee?.id}</Link>
                                </TableCell>
                                <TableCell>{employee?.first_name}</TableCell>
                                <TableCell>{employee?.last_name}</TableCell>
                                <TableCell>{employee?.date_of_birth}</TableCell>
                                <TableCell>{employee?.address}</TableCell>
                                <TableCell>{employee?.date_of_joining}</TableCell>
                                <TableCell>{employee?.salary}</TableCell>
                                <TableCell>{employee?.designation}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table>
            </TableContainer></>
    );
}
