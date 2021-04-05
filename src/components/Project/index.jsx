import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import style from './project.module.less';

const Project = (props) => {

  return (
    <div className={style.postCard}>
      <Link to={`/${props.path}`}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${props.src})`,
          }}
        />
        <div className={style.mrTp20}>
          <p>
            <span className={style.dateHolder}>{props.date ? moment(props.date).format('MMM Do YYYY') : ''}</span>
          </p>
          <h3>{props.title}</h3>
          <p>{props.excerpt}</p>
          <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
            {
                `#${props.tags.join(' #')}`
            }
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
