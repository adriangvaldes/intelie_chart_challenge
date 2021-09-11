import styles from './styles.module.scss';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { useChart } from '../../hooks/useChart';


export function Editor(): JSX.Element {
  const { storeDataInput, inputData } = useChart();


  return (
    <div className={styles.editorContainer}>
      <textarea name="teste-textArea" value={inputData} onChange={event => storeDataInput(event.target.value)}></textarea>
    </div>
  )
}