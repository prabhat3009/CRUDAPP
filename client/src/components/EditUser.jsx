import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, editUser } from '../service/api';

const initialValue = {
    category: '',
    title: '',
    content: '',
    date: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        await editUser(user, id);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Note</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='category' value={user.category} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={user.title} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Content</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='content' value={user.content} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date' value={user.date} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Note</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;