import { useState, useEffect } from 'react';
import { Image } from 'mui-image'
import TextTransition, { presets } from 'react-text-transition';
import Grid from '@mui/material/Grid';
import "../assets/styling/Background.css"
import AOS from 'aos';
import "aos/dist/aos.css"

AOS.init();

const HEADINGS = [
  "Hi, I'm Rajvir Singh.",
  "Software Engineer",
  "Backend Engineer",
  "Problem Solver",
  "Collaborative - Team Player",
  "Growth Mindset"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      5000
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  return (
    <div className="head-text">
      <Image src="black-wood-background.jpeg"
        alt="An image of the starry sky."
        errorIcon={null}
        fit="cover"
        height={800} />
      <div className="text-on-image">
        <div data-aos="fade-in" data-aos-delay="1000" data-aos-duration="3000">
          <Grid container rowSpacing={{ xs: 15, sm: 0 }} direction="column">
            <Grid item>
              <h1>
                <TextTransition springConfig={presets.wobbly}>
                  {HEADINGS[index % HEADINGS.length]}
                </TextTransition>
              </h1>
            </Grid>
            <Grid item>
              <p className="bottom-text">
                I'm a Software Engineer that enjoys growing by
                collaborating with others on challenging problems.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>

    </div>
  );
}