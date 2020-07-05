import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import style from './postCard.module.less';
import { Tag, Divider } from 'antd';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;

  return (
    <div className={style.postCard}>
      <Link to={`/${frontmatter.path}`}>
        <div className={style.mrTp20}>
        <h3>{frontmatter ? frontmatter.title : ''}</h3>
          <p>
            <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
          </p>
          <p>{frontmatter ? frontmatter.excerpt : ''}</p>
          <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
          #${frontmatter.tags.join(' #')}

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
