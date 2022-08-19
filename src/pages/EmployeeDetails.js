import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useEmployees from '../hook/useEmployees';


const EmployeesDetails = () => {
    const { id } = useParams()
    console.log(id);
    const [employees] = useEmployees()
    const [employeeDetails, setEmployeeDetails] = useState([]);



    const neededEmployee = employees.find(employee => employee.id === id)
    const employeeDetailsUrl = neededEmployee?.details;
    useEffect(() => {
        if (employeeDetailsUrl) {
            fetch(employeeDetailsUrl)
                .then(res => res.json())
                .then(data => setEmployeeDetails(data))
        }

    }, [employeeDetailsUrl])


    return (
        <section>

            <TableContainer>
                <Table sx={{ maxWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left">Field</TableCell>
                            <TableCell align="left">Value</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                First name
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.first_name || neededEmployee?.first_name}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Last name
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.last_name || neededEmployee?.last_name}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Date of Birth
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.date_of_birth || neededEmployee?.date_of_birth}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Address
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.date_of_birth || neededEmployee?.address}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Date of Joining
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.date_of_birth || neededEmployee?.date_of_joining}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Salary
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.date_of_birth || neededEmployee?.salary}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Designation
                            </TableCell>
                            <TableCell align="left">{employeeDetails[0]?.date_of_birth || neededEmployee?.designation}</TableCell>

                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
};

export default EmployeesDetails;