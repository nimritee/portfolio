import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag, Row, Col } from 'antd';
import style from './thesis.module.less';

const Thesis = (props) => {
  const colorArray = {
    testing: 'magenta', automatedtesting: 'red', selenium: 'volcano', html: 'orange', css: 'gold',
  };

  return (
    <div className={style.postCard}>
      <div>
        <Row align="middle">
          <Col Xs={24} sm={24} md={24} lg={8}>
            <img className={style.blogImg} src={props.src} />      
          </Col>
          <Col xs={24} sm={24} md={24} lg={16}>
            <div className={style.mrTp20}>
              <h3>{props.title}</h3>
            </div>

            {/* <p>
              <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
            </p> */}
            <p>{props.excerpt}</p>

            <div className={style.linksHolder}>
              <a href={`../${props.reportName}`} download target="_blank">Download Report</a>
              <a href={`../${props.pptName}`} download target="_blank">Download Presentation</a>
              <a href={`../${props.thesisName}`} download target="_blank">Download Thesis</a>
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

export default Thesis;
