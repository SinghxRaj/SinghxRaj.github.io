import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

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
                    <Link href="https://drive.google.com/file/d/1d0lN72vF_ctXrnMmId_1tt8EtznbO33K/view?usp=sharing" target="_blank" color="inherit">
                        <Button variant="outlined" color="inherit">Resume</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}