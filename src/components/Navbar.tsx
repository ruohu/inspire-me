import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
const Navbar = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Inspire Me
          </Link>
        </Typography>
        <Button sx={{ my: 2 }} color="inherit">
          <Link href="#my-favorites" style={{ color: 'inherit', textDecoration: 'none' }}>
            My Favorites
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;