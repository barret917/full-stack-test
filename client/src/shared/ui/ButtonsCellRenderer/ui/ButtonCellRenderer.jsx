import 'font-awesome/css/font-awesome.min.css';
import styles from './ButtonCellRenderer.module.css';

export const ButtonCellRenderer = ({ data, handleUpdate, handleDelete }) => {
  return (
    <div className={styles.box}>
      <button className={styles.btnUpdate} disabled={true} onClick={() => handleUpdate(data)}>
        <i className="fa fa-edit"></i>
      </button>
      <button disabled={true} onClick={() => handleDelete(data)}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};
