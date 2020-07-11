import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag } from 'antd';
import style from './postCard.module.less';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;
  const colorArray = {"testing":"magenta","automated testing":"red","selenium":"volcano","html":"orange","css":"gold"};

  return (
    <div className={style.postCard}>
      <Link to={`/${frontmatter.path}`}>
        <div className={style.mrTp20}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
          }}
        />
          <h3>{frontmatter ? frontmatter.title : ''}</h3>
          <p>
            <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
          </p>
          <p>{frontmatter ? frontmatter.excerpt : ''}</p>

          <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
            <div>
              {
                frontmatter.tags.map(function(innerData,index){
                  return (<Tag color={colorArray[innerData]} index={innerData}>{innerData}</Tag>)
                })
              }
            </div>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
