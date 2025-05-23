'use client';

import { useState } from 'react';
import { Editor, AIChat } from '@/components/workspace';
import { Button } from '@zaibuld/ui';
import { Code, Terminal, Play, Save, FileText, Settings } from 'lucide-react';

export default function Workspace() {
  const [activeTab, setActiveTab] = useState('editor');
  const [showAIChat, setShowAIChat] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Project: My React App</h1>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-1" />
                Run
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowAIChat(!showAIChat)}
            >
              {showAIChat ? 'Hide AI' : 'Show AI'}
            </Button>
            <Button size="sm" variant="ghost">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search files..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto p-2">
            <div className="mb-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 px-2">
                Project Files
              </div>
              <div className="space-y-1">
                {['App.js', 'index.js', 'styles.css'].map((file) => (
                  <div
                    key={file}
                    className="flex items-center px-2 py-1 text-sm rounded hover:bg-gray-200 cursor-pointer"
                  >
                    <FileText className="h-4 w-4 mr-2 text-gray-500" />
                    {file}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`px-4 py-2 text-sm font-medium flex items-center ${
                activeTab === 'editor'
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('editor')}
            >
              <Code className="h-4 w-4 mr-1" />
              Editor
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium flex items-center ${
                activeTab === 'terminal'
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('terminal')}
            >
              <Terminal className="h-4 w-4 mr-1" />
              Terminal
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-auto">
            {activeTab === 'editor' ? (
              <Editor />
            ) : (
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg h-full font-mono text-sm">
                <div className="mb-2">$ npm start</div>
                <div className="text-green-400">
                  Starting the development server...
                </div>
                <div className="mt-2">Compiled successfully!</div>
                <div className="mt-1">
                  You can now view my-app in the browser.
                </div>
                <div className="mt-1 text-gray-400">
                  Local: http://localhost:3000
                </div>
                <div className="text-gray-400">
                  On Your Network: http://192.168.1.5:3000
                </div>
                <div className="mt-2">
                  Note that the development build is not optimized.
                </div>
                <div className="mt-1">
                  To create a production build, use npm run build.
                </div>
                <div className="mt-2 animate-pulse">webpack compiled successfully</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Chat */}
      {showAIChat && <AIChat />}
    </div>
  );
}