import { useState } from 'react'
import './App.css'
import { EditForm, EditEntryType } from './components/EditForm'
import { LoadingSpinnerProvider } from './components/LoadingSpinner'
import toast, { Toaster } from 'react-hot-toast'

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
    <LoadingSpinnerProvider>
      <Toaster />
      <div className="app-container">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Bryan Cartagena Form Example</h1>
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
    </LoadingSpinnerProvider>
  )
}

export default App
