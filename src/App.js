import React from 'react';

import Definitions from "./components/Definitions";
import Card from "./components/Card";


function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];
    return (
        <div>
            <Card inside={{title: 'Title', description: 'lorem ipsum kek cheburek'}}/>

            <Definitions data={definitions}/>
        </div>
    );
}

export default App;
