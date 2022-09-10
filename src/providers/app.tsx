import {AuthProvider} from '@/lib/auth';
import {queryClient} from '@/lib/react-query';
import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {HelmetProvider} from 'react-helmet-async';
import {QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter as Router} from 'react-router-dom';
import {Button} from "@/components/Elements/Button";
import {Spinner} from "@/components/Elements/Spinner";

const ErrorFallback = () => {
    return (
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
            <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button>
        </div>
    );
};

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({children}: AppProviderProps) => {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <HelmetProvider>
                    <QueryClientProvider client={queryClient}>
                        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools/>}
                        <AuthProvider>
                            <Router>{children}</Router>
                        </AuthProvider>
                    </QueryClientProvider>
                </HelmetProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
};