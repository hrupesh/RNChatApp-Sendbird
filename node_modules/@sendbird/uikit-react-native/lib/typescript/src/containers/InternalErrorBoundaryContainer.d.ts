import React, { ErrorInfo } from 'react';
import type { ErrorBoundaryProps } from '../types';
declare class InternalErrorBoundaryContainer extends React.PureComponent<{
    onError?: (props: ErrorBoundaryProps) => void;
    ErrorInfoComponent?: (props: ErrorBoundaryProps) => JSX.Element;
    children?: React.ReactNode;
}> {
    static defaultProps: {
        ErrorInfoComponent: (props: ErrorBoundaryProps) => JSX.Element;
    };
    state: {
        error: Error | null;
        errorInfo: ErrorInfo | null;
    };
    componentDidCatch: (error: Error, errorInfo: ErrorInfo) => void;
    reset: () => void;
    render: () => JSX.Element | null;
}
export default InternalErrorBoundaryContainer;
