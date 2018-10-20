import * as React from 'react';
export interface EnumValuesProps {
    values: TemplateStringsArray | any;
    type: string;
}
export declare class EnumValues extends React.PureComponent<EnumValuesProps> {
    render(): JSX.Element | null;
}
