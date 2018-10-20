import * as PropTypes from 'prop-types';
import * as React from 'react';
import { AppStore } from '../../services';
export interface RedocProps {
    store: AppStore;
    hasApiInfo?: boolean | null | undefined;
    hasSideNav?: boolean | null | undefined;
}
export declare class Redoc extends React.Component<RedocProps> {
    static propTypes: {
        store: PropTypes.Validator<AppStore>;
        hasApiInfo: PropTypes.Requireable<boolean>;
        hasSideNav: PropTypes.Requireable<boolean>;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
