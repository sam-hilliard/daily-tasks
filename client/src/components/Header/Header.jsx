import React from 'react';

import { Container, Typography } from '@material-ui/core';

function Header() {
    return (
        <header>
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom>
                    Daily Goal Tracker
                </Typography>
            </Container>
        </header>
    );
}

export default Header;