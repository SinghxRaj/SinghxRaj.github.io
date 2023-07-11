import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import ExperienceCard from './ExperienceCard';

export default function Project() {
  let projects = [
    {
      title: "Back End Developer",
      companyName: "Translator.io",
      date: "April 2023 - June 2023",
      bulletPoints:
        [
          "Developed a JavaScript-based Discord bot that facilitates seamless communication among users speaking different languages, effectively breaking down language barriers.",
          "Spearheaded the team in devising intuitive feature designs to enhance the user experience and maximize ease of use.",
          "Incorporated persistent data storage for user language data by utilizing an online SQL database with the use of Azure.",
          "Integrated the online database with the backend by leveraging Sequelize, an Object Relational Mapper (ORM), for seamless data management and retrieval"
        ],
      hasCode: true,
      hasWebsite: true,
      codeLink: "https://github.com/UWSocialComputing/Translator.io",
      websiteLink: "https://uwsocialcomputing.github.io/Translator.io/"
    },
    {
      title: "Front End Developer",
      companyName: "RecipeCart",
      date: "January 2023 - March 2023",
      bulletPoints:
        [
          "Coordinated task organization and management for the front-end team, ensuring efficient workflow and timely completion of deliverables.",
          " Managed the development of front-end React component, ensuring strict adherence to design guidelines, usability standards, and coding best practices.",
          "Participated in collaborative code reviews and pair programming sessions, actively contributing to the team's ongoing improvement initiatives, enhancing code quality, and fostering a culture of effective collaboration."
        ],
      hasCode: true,
      codeLink: "https://github.com/jteng2/CSE-403-RecipeCart",
    },
    {
      title: "Full Stack Developer",
      companyName: "Card Shop",
      date: "Currently In Progress",
      bulletPoints:
        [
          "Created a full stack e-commerce website for trading card enthusiasts, offering a wide range of sports cards by leveraging ASP.NET Core and React",
          "Implemented a robust ASP.NET Core backend API to handle critical business logic such as secure user authentication, payment processing, and inventory management..",
          "Designed the database schema for the e-commerce website, ensuring efficient data organization and optimal performance."
        ],
      hasCode: true,
      codeLink: "https://github.com/SinghxRaj/CardShop",
    }
  ]

  function wrapProjects(item: any) {
    return (
      <Grid item>
        <ExperienceCard title={item.title} companyName={item.companyName} date={item.date} bulletPoints={item.bulletPoints} hasButtons={true} hasCode={item.hasCode} hasWebsite={item.hasWebsite} codeLink={item.codeLink} websiteLink={item.websiteLink} />
      </Grid>
    )
  }

  const projectItems = projects.map(
    (item, index) => wrapProjects(item))

  return (
    <>
      <div id="projects"></div>
      <Grid
        container justifyContent="center" alignItems="center" bgcolor={"#252525"} marginTop={1} paddingBottom={5} paddingTop={10} direction={'column'}>
        <Grid item xs={10} md={6} lg={4} xl={3} >
          <Typography minWidth={300} color={"white"}>
            <h1>
              Project Section
            </h1>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={5} justifyContent="center" alignItems="center" bgcolor={"#252525"} marginTop={1} paddingBottom={10}>
            {projectItems}
          </Grid>
        </Grid>
      </Grid >
    </>
  );
}