# React Form Generator

A modern, flexible form generation system built with React and TypeScript that allows for dynamic creation of complex forms with various input types including text fields, checkboxes, file uploads, and a custom PillList component.

## Features

- **Dynamic Form Generation**: Create forms from JSON configurations
- **Multiple Input Types**: Support for various input types including:
  - Text inputs
  - Text areas
  - Checkboxes
  - Radio buttons
  - Select dropdowns
  - File uploads with progress indicators
  - Custom PillList component for tag-like inputs
- **Form Validation**: Built-in validation for required fields and custom validation rules
- **Loading Indicators**: Visual feedback during form submission
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **TypeScript Support**: Full type safety throughout the application

## PillList Component

One of the key features is the custom PillList component that allows users to:
- Add new pills by typing text and pressing Enter or clicking the Add button
- Display pills as rounded labels with text
- Remove pills by clicking the × button on each pill
- Store the pills as an array in the form data

## Technologies Used

- **React**: UI library for building the component interface
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **React Hot Toast**: For toast notifications
- **Context API**: For global state management (loading spinner)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bryancartagena/ReactFormGenerator.git
   cd ReactFormGenerator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

The EditForm component can be used as follows:

```tsx
import { EditForm } from './components/EditForm';

// Define your form fields
const editEntries = [
  {
    type: 'Text',
    attribute: 'name',
    attributeName: 'Name',
    isRequired: true
  },
  {
    type: 'PillList',
    attribute: 'tags',
    attributeName: 'Tags'
  },
  // Add more fields as needed
];

// Handle form submission
const handleSubmit = (formData) => {
  console.log('Form submitted:', formData);
};

// Render the form
function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Example</h1>
      <EditForm 
        editEntries={editEntries}
        onSubmitSuccess={handleSubmit}
      />
    </div>
  );
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the need for flexible, type-safe form generation in React applications
- Special thanks to the React and TypeScript communities for their excellent documentation and support
