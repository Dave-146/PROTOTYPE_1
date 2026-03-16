import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        
        <h1 className="font-serif text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-zinc-400 mb-8 font-light">
          We encountered an unexpected error. Don't worry, your data is safe.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="mb-8 text-left bg-zinc-900 p-4 rounded-lg border border-zinc-800">
            <summary className="cursor-pointer text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs text-red-400 mt-2 overflow-auto">
              {error.toString()}
              {error.stack && (
                <div className="mt-2 text-zinc-500">
                  {error.stack}
                </div>
              )}
            </pre>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetErrorBoundary}
            className="bg-white text-zinc-950 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <button
            onClick={() => {
              navigate('/shopper');
              resetErrorBoundary();
            }}
            className="bg-zinc-900 border border-zinc-700 text-white px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
