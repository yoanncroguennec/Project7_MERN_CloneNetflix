import React, { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
// NEXT
import Image from "next/image";
// NEXT AUTH
import { useSession, signOut } from "next-auth/react";

//////////////////// EXPORT FUNCTION ////////////////////
export default function DropdownNavbar() {
  //////////////////// SESSION ////////////////////
  const { data: session } = useSession();
  console.log(session);

  //////////////////// MENU MUI ////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //////////////////// RETURN ////////////////////
  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Image
          src='/assets/imgs/dp.png'
          alt='dp'
          height={60}
          width={60}
          style={{ borderRadius: "15px", cursor: "pointer" }}
        />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Image
            alt=''
            height={40}
            src={session?.user.image}
            style={{
              borderRadius: "50%",
              height: "60px",
              marginRight: "15px",
              width: "60px",
            }}
            width={40}
          />
          <Typography variant='h6'>{session?.user.name}</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6'>{session?.user.email}</Typography>
        </MenuItem>
        <MenuItem onClick={() => signOut()}>
          <Typography variant='h6'>Se déconnecter</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
