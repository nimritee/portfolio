import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello, I'm Nimritee Sirsalewala 👋🏻. I'm a software developer.`,
  paraTwo: `A self-taught web developer, passionate about various technologies. Working in a high impact environment with frequent deployments, and helping growing development teams build great products. I am a Content Writer and a Teacher. I write my own blogs. I like sharing what I know, and learning what I don't.`,
  paraThree: `When I am not writing code, or writing about code, I like to spend my time with books, travel to places I've never been, meet new people and talk nerdy 🤓.`,
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
        <br></br>
      </div>
    </>
  );
};
export default AboutMe;
