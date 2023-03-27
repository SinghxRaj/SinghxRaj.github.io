import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardMedia from '@mui/material/CardMedia';
import '../assets/styling/IntroCard.css'

export default function IntroCard() {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 400, borderRadius: "15px" }}>
      <CardMedia
        component="img"
        height="220"
        image="Rajvir-Singh-Photo.jpg"
        alt="Picture of Rajvir Singh"
      />
      <CardContent>
        <Typography variant="subtitle1" align="center" className="card-content">
          Rajvir Singh
        </Typography>
        <Typography variant="subtitle2" align="center">
          rajvir11singh@gmail.com
        </Typography>
        <Grid container justifyContent={"center"} margin={1}>
          <Grid item xs={3} sm={4} md={4}>
            <IconButton aria-label="LinkedIn" color="primary">
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} sm={3} md={2}>
            <IconButton aria-label="Github" color="inherit">
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
}