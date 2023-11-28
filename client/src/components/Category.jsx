
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled,Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../constants/data.js';

const StyledTable = styled(Table)`
    border: 2px solid rgba(224, 224, 224, 1);
    margin: 45px auto 0 auto;
    width: 40%;

`;
    
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    font-size: 18px ;
`;

const Chead = styled(Typography)`
display: flex;
    justify-content: center;
    margin-top: 50px;
    font-size: 30px ;
    font-weight: bold;
    text-decoration: underline;
`

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            
            <Chead level="h1">Add Note to a Category</Chead>
            <StyledTable>
                
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/add/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;