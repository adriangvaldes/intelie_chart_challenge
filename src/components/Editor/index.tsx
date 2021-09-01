import styles from './styles.module.scss';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor, IControlledCodeMirror} from 'react-codemirror2';
import { useState } from 'react';

// type EditorProps = {
//   value: string,
//   onChange: (value:string) => void,
// };

type handleChangeProps = {
  
  value: string,
};

export function Editor(): JSX.Element {
  const [inputData, setInputData] = useState('');

  function handleChange: (editor, data, value):IControlledCodeMirror['onBeforeChange'] {
    setInputData(value);
    console.log(inputData);
  }

  return (
    <div className={styles.editorContainer}>
        <ControlledEditor 
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
        />
    </div>
  )
}