import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Thesis from '../../components/Thesis';
import SEO from '../../components/Seo';

const ThesisContainer = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Thesis"
        description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
        path="thesis"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Thesis</h1>
        </div>
        <Row gutter={[20, 20]}>
          {
            data.allMarkdownRemark && data.allMarkdownRemark.edges.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24}>
                <Thesis data={val} />
              </Col>
            ))
          }
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);


export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ThesisContainer;
