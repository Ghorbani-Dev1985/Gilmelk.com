"use client"
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';


const ReactQueryProvider = ({ children } : {children : React.ReactNode}) => {
  // State
  const [queryClientStore] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5*(60*1000),
        gcTime: 10*(60*1000),
        retry: 5,
        retryDelay: 3000,
        refetchOnWindowFocus: true, 
      }
    }
  }));
  // Return Provider
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;