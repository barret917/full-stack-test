import { BarChart } from '@shared/ui/BarChart/ui/BarChart';
import { Card, Col, Row } from 'antd';
import { RadialBarChart } from '@shared/ui/RadialBarChart';
import { AreaChart } from '@shared/ui/AreaChart';
import * as Styled from './styled';

export function Analytics() {
  return (
    <Styled.DashboardWrapper>
      <Row gutter={[12, 12]} style={{ width: '100%', marginBottom: 20 }}>
        <Col span={10}>
          <Card>
            <BarChart height={300} />
          </Card>
        </Col>
        <Col span={14}>
          <Card>
            <RadialBarChart height={300} />
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <AreaChart height={300} />
          </Card>
        </Col>
      </Row>
    </Styled.DashboardWrapper>
  );
}
