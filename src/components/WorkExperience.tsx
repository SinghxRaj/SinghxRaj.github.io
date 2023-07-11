import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import ExperienceCard from './ExperienceCard';

export default function WorkExperience() {
  let workExperiences = [
    {
      title: "Data Analyst Intern",
      companyName: "BroadStreet",
      date: "September 2020 - December 2020",
      bulletPoints:
        [
          "Improved the efficiency of COVID-19 data collection in the West Coast region by leveraging Python to develop webscraping solutions, automating the retrieval of critical information.",
          "Performed data cleansing on a large dataset of over 50,000 new data points for the West Coast region by implementing effective SQL queries."
        ]
    }
  ]

  function wrapExperience(item: any) {
    return (
      <Grid item>
        <ExperienceCard title={item.title} companyName={item.companyName} date={item.date} bulletPoints={item.bulletPoints} hasButtons={false} />
      </Grid>
    )
  }

  const workExperienceItems = workExperiences.map(
    (item, index) => wrapExperience(item))

  return (
    <>
      <div id="workExperience"></div>
      <Grid
        container justifyContent="center" alignItems="center" bgcolor={"#252525"} marginTop={1} paddingBottom={5} paddingTop={10} direction={'column'}>
        <Grid item xs={10} md={6} lg={4} xl={3} >
          <Typography minWidth={300} color={"white"}>
            <h1>
              Work Experience
            </h1>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={5} justifyContent="center" alignItems="center" bgcolor={"#252525"} marginTop={1} paddingBottom={10}>
            {workExperienceItems}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}