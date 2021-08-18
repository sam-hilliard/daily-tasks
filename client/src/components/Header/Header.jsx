import React from 'react';

// material ui
import Typography from '@material-ui/core/Typography';

// styles
import './Header.css';

function Header() {
    return (
        <header>
            <Typography variant="h3" gutterBottom>
                Daily Goal Tracker
            </Typography>
        </header>
    );
}

export default Header;