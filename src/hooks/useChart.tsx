import { timeEnd } from 'console';
import { createContext, ReactNode, useContext, useState } from 'react';
import stringToJsonFormat from '../utils/stringToJsonFormat';

interface EventData {
  type: string;
  timestamp: number;
  select?: string[];
  group?: string[];
  os?: string;
  browser?: string;
  min_response_time?: number;
  max_response_time?: number;
}

interface ChartContextData {
  handleSubmit: () => void;
  storeDataInput: (typedData: string) => void;
  inputData: string;
  chartData: EventData[];
  chartEndRange: number;
}

interface DataProviderProps {
  children: ReactNode;
}

export const ChartContext = createContext({} as ChartContextData);

export function ChartProvider({ children }: DataProviderProps) {
  const [inputData, setInputData] = useState('');
  const [chartData, setChartData] = useState({} as EventData[]);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [chartEndRange, setChartEndRange] = useState<number>(0);

  function handleSubmit() {
    let datas = stringToJsonFormat(inputData);
    setChartData(datas);
    console.log(chartData);
    


    // if (chartData.length !== 0 ) {
    //   const teste = chartData;
    //   console.log('ARROI', teste);
    //   teste.forEach(chart => {
    //     if (chart.type === 'start') {
    //       setStartTime(chart.timestamp);
    //     }
    //     if (chart.type === 'stop') {
    //       setEndTime(chart.timestamp);
    //     }
    //   })
    // }

    // setChartEndRange((endTime - startTime) / 1000);  // in Seconds
    // console.log(chartEndRange);

  }

  async function storeDataInput(typedData: string) {
    await setInputData(typedData);
  }

  return (
    <ChartContext.Provider value={{ handleSubmit, storeDataInput, inputData, chartData, chartEndRange }}>
      {children}
    </ChartContext.Provider>

  );
}

export function useChart() {
  const context = useContext(ChartContext)
  return context;
}