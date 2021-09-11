import { useChart } from "../../hooks/useChart";
import styles from './styles.module.scss';

export default function Footer() {
  const { handleSubmit, inputData } = useChart();
  return (
    <div className={styles.container}>
      <button type="button" onClick={() => handleSubmit()}>GENERATE CHART</button>
    </div>
  );
}