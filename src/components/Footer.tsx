import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export default function Footer() {
  return (
    <Grid container height={{ sm: 400, md: 250 }} bgcolor={"#313131"} marginTop={1} paddingTop={2} justifyContent="center">
      <Grid item xs={3}>
        <Typography sx={{ color: "#c9a6e9", fontSize: 22 }} variant='subtitle1' justifySelf={"center"} marginLeft={1.8} fontFamily='Noto Sans JP, sans-serif'>
          Contact
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="mailto:rajvir11singh@gmail.com">
              <ListItemText primary="Email" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://www.linkedin.com/in/rajvirsin/">
              <ListItemText primary="LinkedIn" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://github.com/SinghxRaj">
              <ListItemText primary="GitHub" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={2}>
        <Typography sx={{ color: "#c9a6e9", fontSize: 22 }} variant='subtitle1' justifySelf={"center"} marginLeft={1.8} fontFamily='Noto Sans JP, sans-serif'>
          Sections
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/#intro">
              <ListItemText primary="Who am I?" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemText primary="Work Experience" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Projects" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Grid >
  );
}