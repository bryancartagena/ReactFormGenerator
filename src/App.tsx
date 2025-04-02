import { useState } from 'react'
import './App.css'
import { EditForm } from './components/EditForm'
import { EditEntryType } from './components/EditForm'
import { Toaster } from 'react-hot-toast';
import { LoadingSpinnerProvider } from './components/LoadingSpinner';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {

  const testEntity = {
    id: '4444',
    name: 'Bryan Dev Test',
    description: 'Test Entity created by Bryan Dev',
    pills: ['Pill Label', 'Pill TEST']
  }

  const editEntries = [
    {
      attribute: 'pills',
      attributeName: 'Pills',
      type: EditEntryType.PillList,
      isRequired: true,
      subName: 'Add pill labels'
    }
  ]
  
  return (
    <ThemeProvider>
      <LoadingSpinnerProvider>
        <Toaster position="top-right" toastOptions={{
          className: 'dark:bg-gray-800 dark:text-white',
        }} />
        <ThemeToggle />
        <div className="app-container flex flex-col items-center justify-start py-8 px-4">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-primary-dark mb-8">Bryan's Form Generator</h1>
          <div className="w-full max-w-3xl">
            <EditForm
              title="Edit Form"
              description="Example to show the PillList component"
              editEntries={editEntries}
              entityObj={testEntity}
              onSubmitSuccess={(updateEntity: unknown) => {
                console.log('Entity updated:', updateEntity);
              }}
              buttonText="Save Changes"
            />
          </div>
        </div>
      </LoadingSpinnerProvider>
    </ThemeProvider>
  )
}

export default App
