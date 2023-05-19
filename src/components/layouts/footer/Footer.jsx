import { Box, styled, Typography } from "@mui/material";
// DATAS
import { dataFooter } from "@/utils/data/DataFooter";


//////////////////// STYLES ////////////////////
const RootFooter = styled(Box)(({ theme }) => ({
  background: "#000",
  color: "#909191",
  padding: "25px 100px",
  [theme.breakpoints.down("sm")]: {},
}));

const BoxListsColumnsFooter = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
}));

const ListsColumnsFooter = styled(Box)(({ theme }) => ({
  margin: "15px 0",
  [theme.breakpoints.down("sm")]: {},
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function Footer() {
    return (
      <RootFooter>
        <Typography variant='h6'>
          Des questions ? Appelez le 0805-220-512
        </Typography>
        <BoxListsColumnsFooter>
          {dataFooter.map(({ titlesColumFooter }) => (
              <ListsColumnsFooter>{titlesColumFooter.map((item) => (
                <Typography>{item}</Typography>
              ))}</ListsColumnsFooter>
          ))}
        </BoxListsColumnsFooter>
        <Typography variant='h6'>Netflix, France</Typography>
      </RootFooter>
    );
}
