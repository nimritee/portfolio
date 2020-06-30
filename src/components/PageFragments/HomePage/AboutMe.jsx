import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: "Hello 👋🏻, I'm Nimritee Sirsalewala.",
  paraTwo: 'A self-taught web developer, passionate about various technologies. Currently working in a high impact environment with frequent deployments, helping development teams build great products. I like sharing what I know, therefore I have been teaching students in my free time. I have been trying to make small impacts with my skills for which, to reach a larger audience, I created a technical blog (I love writing so I write my own blogs too ☺️).',
  paraThree: "What's good? if there is no fun in life. So, when I am not coding or writing about my codes, I love binge watching a web series or go out on long drives and meet new people (mostly like-minded) chat about random stuff.",
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Nimritee', 'Sirsalewala', 'BackEnd Developer', 'FullStack developer', 'Java', 'PHP', 'DataStructure', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
        <br />
      </div>
    </>
  );
};
export default AboutMe;
