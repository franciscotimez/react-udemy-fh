import { Box } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWidth={drawerWidth}/>

      <SideBar drawerWidth={drawerWidth}/>

      <Box
        compoment='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}
        {children}
      </Box>

    </Box>
  );
};
