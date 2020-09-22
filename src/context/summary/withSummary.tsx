import React from "react";
import SummaryProvider from "./SummaryProvider";

export function withSummary<T>(Component: React.ComponentType<T>) {
    return class SummaryComponent extends React.Component<T> {
        render() {
            return (
                <SummaryProvider>
                    <Component { ...this.props } />
                </SummaryProvider>
            );
        }
    }
}

export default withSummary;
