import styles from './styles.module.scss';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor, IControlledCodeMirror} from 'react-codemirror2';
import { useState } from 'react';
import stringToJsonFormat from '../../utils/stringToJsonFormat';

// type EditorProps = {
//   value: string,
//   onChange: (value:string) => void,
// };

type handleChangeProps = {
  value: string,
};

export function Editor(): JSX.Element {
  const [inputData, setInputData] = useState('');
  const [inputDataToJson, setInputDataToJson] = useState({});

  function handleChange (editor:any, data:any, value:any) {
    setInputData(value);
    console.log(inputData);
  }

  function handleChart () {
    
    let datas = stringToJsonFormat(inputData);
    
    datas.map(data => {
      console.log(data.timestamp);
    })
  }

  return (
    <div className={styles.editorContainer}>
        {/* <ControlledEditor 
          onBeforeChange={handleChange}
          value=''
          className={styles.codeMirrorWrapper}
          options={{
            lineWrapping: true,
            lint: true,
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
        /> */}
        <textarea name="teste-textArea" value={inputData} onChange={e => setInputData(e.target.value)}></textarea>
        <button onClick={() => handleChart()}>Gerar Dados</button>
        <h1>{inputData}</h1>
    </div>
  )
}