import styled from 'styled-components';

export const OrdersTableWrapper = styled.div({
  height: '500px',
  width: 'calc(100vw - 255px)',
  overflow: 'auto',
  borderRadius: '10px',


  '--ag-header-background-color': '#2c3e50',
  '--ag-header-foreground-color': 'white',
  '--ag-odd-row-background-color': '#f9f9f9',
  '--ag-even-row-background-color': '#ffffff',
  '--ag-row-hover-color': '#dcdcdc',
  '--ag-font-size': '14px',
  '--ag-border-color': '#dee2e6',


  '.ag-header-cell': {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  
  '.ag-cell': {
    padding: '10px',
    fontFamily: "'Arial', sans-serif",
    fontSize: '14px',
  },

  
  '.ag-row-hover': {
    backgroundColor: '#d1ecf1 !important',
  },
});
