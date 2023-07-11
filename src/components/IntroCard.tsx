import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import '../assets/styling/IntroCard.css'

export default function IntroCard() {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 400, borderRadius: "15px", bgcolor: "#d4d2d2" }}>
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
            <Link href="https://www.linkedin.com/in/rajvirsin/" target="_blank">
              <IconButton aria-label="LinkedIn" color="primary">
                <LinkedInIcon />
              </IconButton>
            </Link>

          </Grid>
          <Grid item xs={3} sm={3} md={2}>
            <IconButton aria-label="Github" color="inherit">
              <Link href="https://github.com/SinghxRaj" target="_blank" color="inherit">
                <GitHubIcon />
              </Link>
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
}