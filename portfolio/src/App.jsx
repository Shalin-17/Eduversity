import React, { useState } from 'react'
import Navigation from './components/Navigation';

const App = () => {

  const [data, setData] = useState("Test");
  return (
    <>
    <div>
      {data}
    </div>
    <button onClick={() => setData("New")}>Send</button>
    <Navigation name={data} />
    </>
    //React.createElement("div", "App")
  )
}



export default App
// Virtual DOM
