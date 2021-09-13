import './App.css';
import { Chart } from './components/Chart';
import { Editor } from './components/Editor';
import Footer from './components/Footer';
import Header from './components/Header';
import { ChartProvider } from './hooks/useChart';

export default function App() {
  return (
    <ChartProvider>
      <Header />
      <Editor />
      <Chart />
      <Footer />
    </ChartProvider>
  );
}

