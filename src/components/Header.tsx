import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const sxStyle = {
    width: "100%",
    backgroundColor: "#3f3f3f",
    position: "relative"
}


export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={sxStyle}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Rajvir's Portfolio
                    </Typography>
                    <Button variant="outlined" color="inherit" sx={{ mr: 2 }}>
                        Projects
                    </Button>
                    <Button variant="outlined" color="inherit">Resume</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}