import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag, Row, Col } from 'antd';
import style from './thesis.module.less';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;
  const colorArray = {
    testing: 'magenta', automatedtesting: 'red', selenium: 'volcano', html: 'orange', css: 'gold',
  };

  return (
    <div className={style.postCard}>
      <div>
        <Row align="middle">
          <Col Xs={24} sm={24} md={24} lg={8}>
            {frontmatter ? <img className={style.blogImg} src={frontmatter.cover.childImageSharp.fluid.src} /> : null}      
          </Col>
          <Col xs={24} sm={24} md={24} lg={16}>
            <div className={style.mrTp20}>
              <h3>{frontmatter ? frontmatter.title : ''}</h3>
            </div>

            {/* <p>
              <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
            </p> */}
            <p>{frontmatter ? frontmatter.excerpt : ''}</p>

            <div className={style.linksHolder}>
              <a href={`../${frontmatter.reportName}`} download target="_blank">Download Report</a>
              <a href={`../${frontmatter.pptName}`} download target="_blank">Download PPT</a>
              <a href={`../${frontmatter.thesisName}`} download target="_blank">Download Thesis</a>
            </div>
            {/* <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
              <div>
                {
                frontmatter.tags.map(function (innerData) {
                  return (<Tag color={colorArray[innerData]} index={innerData}>{innerData}</Tag>);
                })
                }
              </div>
            </p> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PostCard;
