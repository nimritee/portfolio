import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={50}
          text="Java"
        />
        <ProgressBar
          percent={50}
          text="PHP"
        />
        <ProgressBar
          percent={50}
          text="Gatsby"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={50}
          text="Selenium"
        />
        <ProgressBar
          percent={50}
          text="DevOps"
        />
        <ProgressBar
          percent={50}
          text="MySQL"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
