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
  begin?: number; 
  end?: number;
}

interface EventDataReal {
  type: string;
  timestamp: number;
  os: string;
  browser: string;
  min_response_time: number;
  max_response_time: number;
}

interface EventStart {
  type: string;
  timestamp: number;
  select: string[];
  group: string[];
}

interface EventSpan {
  type: string;
  begin: number; 
  end: number;
}

interface EventStop {
  type: string;
  timestamp: number;
}

interface ChartContextData {
  handleSubmit: () => void;
  setChartRange: () => number;
  storeDataInput: (typedData: string) => void;
  inputData: string;
  chartData: EventData[];
  startEvent: EventStart;
  stopEvent: EventStop;
  spanEvent: EventSpan;
  data: EventData[]
}

interface DataProviderProps {
  children: ReactNode;
}

export const ChartContext = createContext({} as ChartContextData);

export function ChartProvider({ children }: DataProviderProps) {
  const [inputData, setInputData] = useState('');
  const [chartData, setChartData] = useState([] as EventData[]);

  let startEvent = {}
  let stopEvent = {}
  let spanEvent = {}
  const data = [];
 
  function setChartRange() {
    let startTime = 0;
    let endTime = 0;
    let visibleDateRange = 0;

    for (const chart of chartData) {
      if (chart.type === 'start') {
        startTime = chart.timestamp;
      }
      if (chart.type === 'stop') {
        endTime = chart.timestamp;
      }
    }
    const chartEndRange = (endTime - startTime)/1000
    return chartEndRange;
  }

  function handleSubmit() {
    const datas = stringToJsonFormat(inputData);
    for (const chart of datas) {
      if (chart.type === 'start') {
        startEvent = chart
      }
      if (chart.type === 'stop') {
        stopEvent = chart
      }
      if (chart.type === 'span'){
        spanEvent = chart
      }
      if (chart.type === 'data'){
        data.push(chart)
      }
    }
    setChartData(datas);
  }

  async function storeDataInput(typedData: string) {
    await setInputData(typedData);
  }

  return (
    <ChartContext.Provider value={{ handleSubmit, storeDataInput, inputData, chartData, setChartRange, startEvent, stopEvent }}>
      {children}
    </ChartContext.Provider>
  );
}

export function useChart() {
  const context = useContext(ChartContext)
  return context;
}