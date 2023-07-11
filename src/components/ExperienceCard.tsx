import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import ListItemButton from '@mui/material/ListItemButton'
import Link from '@mui/material/Link'

export default function ExperienceCard(props: any) {

  function generateBulletPoints(bulletPointText: string) {
    return (
      <>
        <ListItem>
          <ListItemButton>
            <LabelImportantIcon sx={{ color: "#c9a6e9" }} />
          </ListItemButton>
          <ListItemText
            primary={bulletPointText} sx={{ color: 'white', paddingLeft: "20px" }}>
          </ListItemText>
        </ListItem>
      </>
    )
  }

  const visibility = props.hasButtons ? "visible" : "hidden";
  const codeVisible = props.hasCode ? "visible" : "hidden";
  const websiteVisible = props.hasWebsite ? "visible" : "hidden";

  const bulletPointItems = props.bulletPoints.map(
    (bulletPointText: any, index: any) => generateBulletPoints(bulletPointText));

  return (
    <Card sx={{ maxWidth: 'lg', bgcolor: "#313131" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#c9a6e9" }}>
          {props.title}
        </Typography>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={3} xs={6} md={6} lg={6}>
            <Typography sx={{ color: "#c9a6e9" }}>
              {props.companyName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "#c9a6e9" }}>
              {props.date}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <List>
            {bulletPointItems}
          </List>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", visibility: { visibility } }}>
        <Link href={props.codeLink} target="_blank" visibility={codeVisible}>
          <Button size="small" variant="contained" sx={{ color: 'white', bgcolor: "#7846a6", ":hover": { bgcolor: "#824fb0" } }}>Code</Button>
        </Link>
        <Link href={props.websiteLink} target="_blank" visibility={websiteVisible}>
          <Button size="small" variant="contained" sx={{ color: 'white', bgcolor: "#7846a6", ":hover": { bgcolor: "#824fb0" } }}>Website</Button>
        </Link>
      </CardActions>
    </Card>
  );
}