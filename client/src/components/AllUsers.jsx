import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';

import { getUsers, deleteUser } from '../service/api.js';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
        height: 50px;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            let response = await getUsers();

            // Check if response is undefined
            if (!response) {
                console.error('Error fetching users: Response is undefined');
                return;
            }

            // Assuming the response has a 'data' property
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    }




    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    {/* <TableCell>Id</TableCell> */}
                    <TableCell>Category</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Date</TableCell>
                </THead >

            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TRow key={user.id}>
                            {/* <TableCell>{user._id}</TableCell> */}
                            <TableCell>{user.category}</TableCell>
                            <TableCell>{user.title}</TableCell>
                            <TableCell>{user.content}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TRow>
                    ))
                }

            </TableBody>
        </StyledTable>
    )

}
export default AllUsers;



