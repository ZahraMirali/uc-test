import { useEffect, useRef, useState } from 'react';

function App() {
  const rerendersCount = useRef(0);
  const mounted = useRef();

  const [firstCounts, setFirstCounts] = useState(0);
  const [secondCounts, setSecondCounts] = useState(0);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      rerendersCount.current++;
    }
  });

  return (
    <div>
      {firstCounts}{' '}
      <button onClick={() => setFirstCounts((prev) => prev + 1)}>
        Increase First Count
      </button>
      <br />
      <br />
      {secondCounts}{' '}
      <button onClick={() => setSecondCounts((prev) => prev + 1)}>
        Increase Second Count
      </button>
      <br />
      <br />
      <br />
      <br />
      Rerenders Count = {rerendersCount.current}
    </div>
  );
}

export default App;
