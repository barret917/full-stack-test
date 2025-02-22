import 'font-awesome/css/font-awesome.min.css';
import styles from './ButtonCellRenderer.module.css';
import { Button } from 'antd';

export const ButtonCellRenderer = ({ data, handleUpdate, handleDelete }) => {
  return (
    <div className={styles.box}>
      <Button size='small' disabled={true}>
        <i className="fa fa-edit"></i>
      </Button>

      <Button size='small' disabled={true}>
        <i className="fa fa-trash"></i>
      </Button>
    </div>
  );
};
