import React, { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

import { truncate } from 'lodash';

interface CheckoutFormButtonProps {
  userButtonText: string;
  menuItems: Array<{
    name: string;
    handler: () => void;
  }>;
  disabled?: boolean;
}

const UserAccountButton: React.FC<CheckoutFormButtonProps> = ({
  userButtonText,
  menuItems,
  disabled,
}) => {
  const truncatedUserButtonText = truncate(userButtonText, { length: 10 });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const minWidth = anchorEl?.offsetWidth;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title={userButtonText}>
        <span>
          <Button
            disabled={disabled}
            onClick={handleClick}
            color={'primary'}
            startIcon={
              <AccountCircleIcon
                sx={{
                  width: '30px',
                  height: '30px',
                  color: '#AEAEAE',
                }}
              />
            }
            sx={{
              color: 'black',
              flexShrink: 0,
              letterSpacing: '0.1rem',
              fontSize: '16px',
              padding: '18px 24px 18px 24px',
              height: '44px',
              borderRadius: '100px',
              boxShadow: '0 4px 16px rgb(0 0 0 / 4%)',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            }}
          >
            {truncatedUserButtonText}
          </Button>
        </span>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth,
          },
        }}
      >
        {menuItems.map(item => (
          <MenuItem key={item.name} onClick={item.handler}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default UserAccountButton;
