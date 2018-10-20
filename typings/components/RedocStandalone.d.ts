import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RedocRawOptions } from '../services/RedocNormalizedOptions';
export interface RedocStandaloneProps {
    spec?: object;
    specUrl?: string;
    hasApiInfo?: boolean | null | undefined;
    hasSideNav?: boolean | null | undefined;
    options?: RedocRawOptions;
    onLoaded?: (e?: Error) => any;
}
export declare class RedocStandalone extends React.PureComponent<RedocStandaloneProps> {
    static propTypes: {
        spec: (props: any, _: any, componentName: any) => Error | null;
        specUrl: (props: any, _: any, componentName: any) => Error | null;
        options: PropTypes.Requireable<any>;
        onLoaded: PropTypes.Requireable<any>;
        hasApiInfo: PropTypes.Requireable<boolean>;
        hasSideNav: PropTypes.Requireable<boolean>;
    };
    render(): JSX.Element;
}
