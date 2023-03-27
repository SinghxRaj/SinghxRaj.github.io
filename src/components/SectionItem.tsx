import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function SectionItem(props: any) {
  let listItems = props.points.map((point: string) => <ListItem>{point}</ListItem>)
  return (
    <Grid direction="column" bgcolor={"white"}>
      <Grid item>
        <Typography variant="subtitle1">
          {props.heading}
        </Typography>
      </Grid>
      <Grid item>
        <List>
          {listItems}
        </List>
      </Grid>
    </Grid>

  )
}