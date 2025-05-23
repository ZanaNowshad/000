'use client';

import { useState } from 'react';
import { Card, CardContent } from '@zaibuld/ui';
import { Sandpack } from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';

const defaultFiles = {
  '/App.js': `import { useState } from 'react';

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
}`,
  '/index.js': `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
  '/styles.css': `body {
  font-family: sans-serif;
  margin: 0;
  padding: 1rem;
  background-color: #f5f5f5;
}

.App {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-top: 0;
}

button {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

button:hover {
  background-color: #4338ca;
}`,
};

export function Editor() {
  const [files, setFiles] = useState(defaultFiles);

  return (
    <Card className="h-full">
      <CardContent className="p-0 h-full">
        <Sandpack
          theme={atomDark}
          template="react"
          files={files}
          options={{
            showNavigator: true,
            showTabs: true,
            showLineNumbers: true,
            showInlineErrors: true,
            wrapContent: true,
            editorHeight: 600,
            classes: {
              'sp-wrapper': 'h-full rounded-lg overflow-hidden',
              'sp-layout': 'h-full',
              'sp-stack': 'h-full',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}