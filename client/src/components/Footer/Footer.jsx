import React from 'react';

import { Container, Typography } from '@material-ui/core';

function Footer() {
    return (
        <footer>
            <Container maxWidth="sm">
                <Typography variant="subtitle1" gutterBottom>
                    Developed by Sam Hilliard
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;