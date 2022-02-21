import React from 'react';

import Definitions from "./components/Definitions";
import Card from "./components/Card";
import Progress from "./components/Progress";


function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];
    return (
        <div className='container'>
            <Card inside={{title: 'Title', description: 'lorem ipsum kek cheburek'}}/>

            <Definitions data={definitions}/>
            <Progress percentage={40} />
        </div>
    );
}

export default App;
