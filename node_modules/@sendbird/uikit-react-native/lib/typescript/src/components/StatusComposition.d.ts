import React from 'react';
type Props = {
    loading?: boolean;
    LoadingComponent?: JSX.Element;
    error?: boolean;
    ErrorComponent?: JSX.Element;
    children: React.ReactNode;
};
declare const StatusComposition: ({ children, error, ErrorComponent, LoadingComponent, loading }: Props) => JSX.Element;
export default StatusComposition;
