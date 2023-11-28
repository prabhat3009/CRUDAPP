
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center/100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 80px;
    color: white;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 25px;
    color:white;
    background: black;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>INSTANTNOTE</Heading>
            <SubHeading>Welcome to instantnote app</SubHeading>
        </Image>
    )
}

export default Banner;