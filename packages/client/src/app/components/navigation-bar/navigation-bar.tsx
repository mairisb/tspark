import { AccountCircle } from '@mui/icons-material';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRootStore } from '../../../core/root.store';

export const NavigationBar: React.FC = observer(() => {
  const { authStore } = useRootStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Dropdown = () => (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem component={Link} to="/profile">
        Profile
      </MenuItem>
      <MenuItem onClick={() => authStore.logout()}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none' }}
          flexGrow={1}
        >
          TSpark
        </Typography>
        {authStore.isAuthenticated ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Dropdown />
          </>
        ) : (
          <Button component={Link} to="/auth/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
});
