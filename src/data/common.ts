/* 
 * Common data types used across the application
 */

// Enum for stored file states
export const StoredFileState = {
  Uploading: 'uploading',
  Ready: 'ready',
  Failed: 'failed',
  Deleted: 'deleted'
} as const;

// Type based on the enum values
export type StoredFileStateType = typeof StoredFileState[keyof typeof StoredFileState];

// Interface for stored file data
interface StoredFileData {
  id?: string;
  file_name?: string;
  file_path?: string;
  file_size?: number;
  content_type?: string;
  entity_id?: string;
  field_name?: string;
  created_at?: string;
  state?: StoredFileStateType;
}

// Class for stored file objects
export class StoredFile {
  id: string;
  file_name: string;
  file_path: string;
  file_size: number;
  content_type: string;
  entity_id: string;
  field_name: string;
  created_at: string;
  state: StoredFileStateType;

  constructor(data: StoredFileData = {}) {
    this.id = data.id || '';
    this.file_name = data.file_name || '';
    this.file_path = data.file_path || '';
    this.file_size = data.file_size || 0;
    this.content_type = data.content_type || '';
    this.entity_id = data.entity_id || '';
    this.field_name = data.field_name || '';
    this.created_at = data.created_at || new Date().toISOString();
    this.state = data.state || StoredFileState.Ready;
  }
}
