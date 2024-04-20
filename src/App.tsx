import { useState, useCallback } from 'react';
import './App.css';

const useCb = (cb: any, dep: any[]) => {
  const memCb = useCallback(cb, dep);

  console.log('=== is same cb', cb === memCb);

  return memCb;
};

function App() {
  const [count, setCount] = useState(0);
  useCb(() => 1, [count]);
  const onClick = useCallback(() => setCount(count + 1), [count]);

  return <button onClick={onClick}>Count</button>;
}

export default App;
