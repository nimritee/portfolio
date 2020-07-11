import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Tag } from 'antd';
import style from './postCard.module.less';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;
  const color = ["red","blue","green"];

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
          {
            color.map((color,i) =>  {
              return <Tag color ={color} key  = {'color' - i }/>
            })
          }
          ${frontmatter.tags.join(' #')}

          <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
            <div>
              <Tag color="magenta">java</Tag>
              <Tag color="red">css</Tag>
              <Tag color="volcano">php</Tag>
              <Tag color="orange">selenium</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
