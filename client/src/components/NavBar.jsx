
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar) `
background: black;
`;

const Tabs = styled(NavLink) `
font-size: 22px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`;


const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
              <Tabs to='/'>InstantNote</Tabs>
              <Tabs to='all'>All Notes..</Tabs>
              <Tabs to='/add'>Add Note..</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;