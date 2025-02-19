import { BarChart } from '@shared/ui/BarChart/ui/BarChart';
import { Card, Col, Row } from 'antd';
import { RadialBarChart } from '@shared/ui/RadialBarChart';
import { AreaChart } from '@shared/ui/AreaChart';
import * as Styled from './styled';
import { useWindowResize } from '@shared/hooks';
import { Couriers } from '@pages/Couriers';
import { Deliveries } from '@pages/Deliveries';

export function Dashboard() {
  const { width } = useWindowResize();

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

      <Row gutter={[12, 12]} style={{ width: '100%', marginBottom: 20 }}>
        <Col span={24}>
          <Card title="Курьеры">
            <Couriers />
          </Card>
        </Col>
      </Row>
      <Row gutter={[12, 12]} style={{ width: '100%' }}>
        <Col span={24}>
          <Card title="Доставки">
            <Deliveries />
          </Card>
        </Col>
      </Row>
    </Styled.DashboardWrapper>
  );
}
