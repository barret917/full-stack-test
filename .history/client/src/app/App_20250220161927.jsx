
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Dashboard } from '@pages/Dashboard';
import { Analytics } from '@pages/Analytics';
import { Deliveries } from '@pages/Deliveries/ui/Deliveries';
import { Couriers } from '@pages/Couriers/ui/Couriers';
import { Navbar } from './Navbar';
import * as Styled from './styled';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { RefreshProvideк } 

export function App() {
  return (
    <Styled.RoutesWrapper>
      <Router>
        <RefreshProvider>
          <Navbar />
          <Styled.PagesWrapper>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/couriers" element={<Couriers />} />
              <Route path="/deliveries" element={<Deliveries />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Styled.PagesWrapper>
        </RefreshProvider>
      </Router>
    </Styled.RoutesWrapper>
  );
}
