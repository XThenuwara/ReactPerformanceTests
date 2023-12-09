import React, { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponent from './ListComponent'
import ListMemoComponent from './ListMemoComponent'

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1,2]);

  const listRender = useMemo(() => {
    return list.map((item) => {
      console.log("In App.tsx Memo Function", item);
      return <div key={item}>{item}</div>;
    });
  }, [list]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {
          list.map((item) => {
            console.log("In App.tsx Map Function", item);
            return <div key={item}>{item}</div>;
          })
        }
      </div>
      <div>
        <ListComponent list={list}/>
      </div>
      <div>
        <ListMemoComponent list={list}/>
      </div>
      <div>
        <ListRenderWithMemo list={list}/>
      </div>
      <div>
          {listRender}
      </div>
    </>
  )
}

const ListRenderWithMemo = React.memo(({ list }: { list: number[] }) => {
  
  return (
    <div>
      {
        list.map((item) => {
          console.log("In App.tsx Memo Component", item);
          return <div key={item}>{item}</div>;
        })
      }
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.list === nextProps.list;
})



export default App
