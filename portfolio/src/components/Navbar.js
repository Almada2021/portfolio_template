import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useScrollTo } from "react-use-window-scroll";

const PrevLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.main,
  "&:hover": {
    color: theme.palette.text.secondary,
    transition: "1s",
  },
}));
const PrevLinkMobile = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  color: theme.palette.text.main,
  "&:hover": {
    color: theme.palette.text.main,
    transition: "1s",
  },
}));
const drawerWidth = 240;
const navItems = ["Home", "Proyects", "Contact"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const scroll = useScrollTo();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center", backgroundColor: "#5800FF", height: "100%" }}
      >
        <Typography
          variant="h6"
          sx={{ my: 2, color: "#fff", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Almada dev
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <PrevLinkMobile
                to={"mobile"}
                onClick={(e) => {
                  e.preventDefault();
                  scroll({ top: 0, left: 0, behavior: "auto" });
                  navigate(item !== "Home" ? `/${item}` : "/");
                }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </PrevLinkMobile>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", cursor: "pointer" },
              }}
              onClick={() => navigate("/")}
            >
              Almada dev
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  <PrevLink
                    to={"file"}
                    onClick={(e) => {
                      e.preventDefault();
                      scroll({ top: 0, left: 0, behavior: "auto" });
                      navigate(item !== "Home" ? `/${item}` : "/");
                    }}
                  >
                    {item}
                  </PrevLink>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
