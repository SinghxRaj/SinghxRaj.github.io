import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import SectionItem from './SectionItem';

export default function WorkExperience() {
  let items = [{ heading: "item1", points: ["point1", "point2", "point3"] }]
  let sectionItems = items.map(({ heading, points }) => <SectionItem heading={heading} points={points} />)

  return (
    <Grid direction="column" bgcolor="#202020" marginTop={1} paddingTop={2}>
      <Typography variant="h3">
        Work Experience
      </Typography>
      <Grid direction="column">
        {sectionItems}
      </Grid>
    </Grid >
  );
}