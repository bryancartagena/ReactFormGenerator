import { StoredFile, StoredFileState } from '../data/common';

// Types for the callback functions
type ProgressCallback = (progress: number) => void;
type CompletionCallback = (file: StoredFile) => void;

// Return type for the upload task
interface UploadTask {
  cancel: () => void;
}

export const uploadFile = (
  entityId: string, 
  fieldName: string, 
  file: File, 
  onProgress?: ProgressCallback, 
  onComplete?: CompletionCallback
): UploadTask => {
  const reader = new FileReader();
  
  reader.onload = () => {
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 10;
      if (onProgress) onProgress(progress);
      
      if (progress >= 100) {
        clearInterval(progressInterval);
        
        // StoredFile object
        const storedFile = new StoredFile({
          id: `file-${Date.now()}`,
          file_name: file.name,
          file_path: URL.createObjectURL(file),
          file_size: file.size,
          content_type: file.type,
          entity_id: entityId,
          field_name: fieldName,
          created_at: new Date().toISOString(),
          state: StoredFileState.Ready
        });
        
        if (onComplete) onComplete(storedFile);
      }
    }, 200);
  };
  
  reader.readAsDataURL(file);
  
  return {
    cancel: () => console.log('Upload cancelled')
  };
};
