import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag } from 'antd';
import style from './postCard.module.less';
import { Row, Col } from 'antd';


const ImgStyle = {
  boxShadow: '1px 3px 16px #a7a7a7',
  borderRadius: '10px',
  maxWidth: '90%',
};

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;
  const colorArray = { "testing": "magenta", "automated testing": "red", "selenium": "volcano", "html": "orange", "css": "gold" };

  return (
    <div className={style.postCard}>
      <Link to={`/${frontmatter.path}`}>
        <Row align="middle">
          <Col Xs={24} sm={24} md={8} lg={8}>

            {frontmatter ? <img style={ImgStyle} src={frontmatter.cover.childImageSharp.fluid.src} /> : null}

          </Col>
          <Col xs={24} sm={24} md={16} lg={16}>
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
                    return (<Tag color={colorArray[innerData]} index={innerData}>{innerData}</Tag>)
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
