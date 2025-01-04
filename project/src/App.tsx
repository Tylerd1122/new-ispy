import React, { useState } from 'react';
import LoadingScreen from './components/loading/LoadingScreen';
import StreamViewer from './components/streams/StreamViewer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <StreamViewer />
      )}
    </>
  );
}

export default App;