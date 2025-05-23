'use client';

import { Card, CardContent } from '@zaibuld/ui';

// Mock editor component for build
export function Editor() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 h-full">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg h-full font-mono text-sm overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">App.js</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">index.js</span>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded">styles.css</span>
            </div>
            <div className="flex space-x-2">
              <button className="text-xs px-2 py-1 bg-gray-800 rounded">Run</button>
              <button className="text-xs px-2 py-1 bg-gray-800 rounded">Format</button>
            </div>
          </div>
          <pre className="text-green-400">
{`import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello ZAIBuilD</h1>
      <p>Edit App.js and save to reload.</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}