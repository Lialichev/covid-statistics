import React from "react";
import HistoryProvider from "./HistoryProvider";

export function withHistory<T>(Component: React.ComponentType<T>) {
    return class HistoryComponent extends React.Component<T> {
        render() {
            return (
                <HistoryProvider>
                    <Component { ...this.props } />
                </HistoryProvider>
            );
        }
    }
}

export default withHistory;
