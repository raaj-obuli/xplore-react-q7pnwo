import { useCallback } from 'react';
import './App.css';

const useCb = (cb: any, dep: any[]) => {
  const memCb = useCallback(cb, dep);
  console.log('=== is same cb', cb === memCb);
  return memCb;
};

function App() {
  useCb(() => 1, []);
  return <>Hello</>;
}

export default App;
