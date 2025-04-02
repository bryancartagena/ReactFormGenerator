import React, { createContext, useContext, useState, ReactNode } from 'react';
import './LoadingSpinner.css';

/*
 * First we create the context type and value, so we can use the loading spinner globally
 * without having to pass props manually at every level
*/
type LoadingSpinnerContextType = [boolean, () => void, () => void] | undefined;
const LoadingSpinnerContext = createContext<LoadingSpinnerContextType>(undefined);

// Props interface for LoadingSpinner
interface LoadingSpinnerProps {
  isLoading: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

// Props interface for Provider
interface LoadingSpinnerProviderProps {
  children: ReactNode;
}

export const LoadingSpinnerProvider: React.FC<LoadingSpinnerProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoadingSpinnerContext.Provider value={[isLoading, showLoader, hideLoader]}>
      {children}
      <LoadingSpinner isLoading={isLoading} />
    </LoadingSpinnerContext.Provider>
  );
};

export const useLoadingSpinner = (): [boolean, () => void, () => void] => {
  const context = useContext(LoadingSpinnerContext);
  if (!context) {
    throw new Error('useLoadingSpinner must be used within a LoadingSpinnerProvider');
  }
  return context;
};
