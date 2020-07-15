import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag, Row, Col } from 'antd';
import style from './postCard.module.less';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;
  const colorArray = {
    testing: 'magenta', automatedtesting: 'red', selenium: 'volcano', html: 'orange', css: 'gold',
  };

  return (
    <div className={style.postCard}>
      <Link to={`/${frontmatter.path}`}>
        <Row align="middle">
          <Col Xs={24} sm={24} md={24} lg={8}>
            {frontmatter ? <img className={style.blogImg} src={frontmatter.cover.childImageSharp.fluid.src} /> : null}      
          </Col>
          <Col xs={24} sm={24} md={24} lg={16}>
            <div className={style.mrTp20}>
              <h3>{frontmatter ? frontmatter.title : ''}</h3>
            </div>

            <p>
              <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
            </p>
            <p>{frontmatter ? frontmatter.excerpt : ''}</p>

            <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
              <div>
                {
                frontmatter.tags.map(function (innerData) {
                  return (<Tag color={colorArray[innerData]} index={innerData}>{innerData}</Tag>);
                })
                }
              </div>
            </p>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default PostCard;
