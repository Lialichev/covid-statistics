import React from "react";
import HistoryProvider from "./SummaryProvider";

export function withSummary<T>(Component: React.ComponentType<T>) {
    return class SummaryComponent extends React.Component<T> {
        render() {
            return (
                <HistoryProvider>
                    <Component { ...this.props } />
                </HistoryProvider>
            );
        }
    }
}

export default withSummary;
