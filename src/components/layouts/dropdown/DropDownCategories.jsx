import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";
// DATAS
import { valueCategory } from "@/utils/data/DataValueCategory";
// ICONS
import { SlArrowDown } from "react-icons/sl";

//////////////////// EXPORT FUNCTION ///////////////////
export default function DropDownCategories({ type }) {
  //////////////////// STYLES CATEGORIES ////////////////////
  const BoxCategory = styled(Box)(({ theme }) => ({
    alignItems: "center",
    color: "#FFF",
    display: "flex",
    fontSize: "20px",
    fontWeight: "500",
    left: "50px",
    position: "absolute",
    top: "80px",
  }));

  const Dropdown = styled(Box)(({ theme }) => ({
    background: "#000",
    border: "1px solid #FFF",
    margin: "100px auto",
    position: "relative",
    userSelect: "none",
    width: "200px",
  }));

  const DropdownBtn = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background: "#000",
    boxShadow: "3px 3px 10px 6px rgba(0, 0, 0, 0.06)",
    color: "#FFF",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: "15px 20px",
  }));

  const DropdownItem = styled(Box)(({ theme }) => ({
    background: "#000",
    cursor: "pointer",
    padding: "10px",
    transition: "all 0.2s",
    "&:hover": {
      background: "#333",
    },
  }));

  const styleLink = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
  };

  //////////////////// DROPDOWN CATEGORIES ////////////////////
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    type && (
      <BoxCategory>
        <Dropdown>
          <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
            <Typography>
              {selected || "GENRE"} ({type === "movie" ? "Films" : "Séries"}
              )</Typography>
            <SlArrowDown size={25} />
          </DropdownBtn>
          {isActive && (
            <>
              {valueCategory.map(({ textCategory, urlCategory }) => (
                <Link
                  href={urlCategory}
                  key={textCategory}
                  style={styleLink}
                  onClick={(e) => setSelected(e.target.textContent)}
                >
                  <DropdownItem>
                    <Typography>{textCategory}</Typography>
                  </DropdownItem>
                </Link>
              ))}
            </>
          )}
        </Dropdown>
      </BoxCategory>
    )
  );
}
