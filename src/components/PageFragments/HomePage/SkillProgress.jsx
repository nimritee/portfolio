import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="DB - MySql, Columnstore DB, SQL Server, Redshift"
        />
        <ProgressBar
          percent={80}
          text="Automated Testing - Selenium, JMeter"
        />
        <ProgressBar
          percent={60}
          text="Frontend Designing - Gatsby, React"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
      <ProgressBar
        percent={85}
        text="Designing API and Scripting - Java, PHP, Python"
      />
      <ProgressBar
        percent={60}
        text="DevOps -  Docker, VSTS, CircleCI"
      />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
