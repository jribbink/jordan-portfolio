import React, { ReactElement } from 'react';
import {
  AppBar, Button, Container, IconButton, Toolbar, Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function App(): ReactElement {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        Hello
      </Container>
    </div>
  );
}
export default App;
