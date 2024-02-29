import React, { useState } from 'react';
import MainSearch from './components/MainSearch';
import Map from './components/Map';

function App() {
  const [coords, setCoords] = useState(null);

  return (
    <main>
      <Map data={coords} />
      <MainSearch setCoords={setCoords} />
    </main>
  );
}

export default App;
