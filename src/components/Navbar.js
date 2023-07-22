import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ArrowBackIcon onClick={(e)=>{e.preventDefault();window.location.href='/'}}/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Book Store
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
