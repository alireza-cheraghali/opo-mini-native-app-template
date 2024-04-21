import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import {TQueryClientTypes} from "./queryClient.types";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
});

const QueryClientWrapper: TQueryClientTypes = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            {children}
        </QueryClientProvider>
    );
};

export default QueryClientWrapper;
