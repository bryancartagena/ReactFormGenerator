import React, { useState, useRef, ChangeEvent } from 'react';

// Define props interface for FileUpload component
interface FileUploadProps {
  fieldDisplayName: string;
  fieldName: string;
  initialFiles: any[];
  entityId: string | null;
  supportedFileTypes: string;
  uponFileChange: (files: File[]) => void;
  isMultiple?: boolean;
  fieldDisplaySubName?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ 
  fieldDisplayName, 
  fieldName, 
  initialFiles = [], 
  entityId, 
  supportedFileTypes, 
  uponFileChange, 
  isMultiple = false, 
  fieldDisplaySubName
}) => {
  const [files, setFiles] = useState<File[]>(initialFiles);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const fileArray: File[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        fileArray.push(selectedFiles[i]);
      }

      setFiles(fileArray);
      uponFileChange(fileArray);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="file-upload">
      <div className="flex items-center">
        <button 
          type="button" 
          className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleButtonClick}
        >
          {fieldDisplayName}
          {fieldDisplaySubName && (
            <span className="block text-xs text-gray-500">{fieldDisplaySubName}</span>
          )}
        </button>
        <div className="ml-3">
          {files.length > 0 ? (
            <ul className="list-disc pl-5">
              {files.map((file, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-sm text-gray-500">No files selected</span>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={supportedFileTypes}
        multiple={isMultiple}
        style={{ display: 'none' }}
      />
    </div>
  );
};
