import * as React from 'react';
import { MediaContentModel } from '../../services/models';
export interface PayloadSamplesProps {
    content: MediaContentModel;
}
export declare class PayloadSamples extends React.Component<PayloadSamplesProps> {
    render(): JSX.Element | null;
    private renderDropdown;
}
