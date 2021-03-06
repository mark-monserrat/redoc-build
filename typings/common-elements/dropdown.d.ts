import { StyledComponentClass } from 'styled-components';
export interface DropdownOption {
    label: string;
    value: string;
}
export interface DropdownProps {
    options: DropdownOption[];
    value: DropdownOption;
    onChange: (val: DropdownOption) => void;
}
export declare const StyledDropdown: StyledComponentClass<any, DropdownProps, any>;
export declare const SimpleDropdown: StyledComponentClass<any, import("../theme").ResolvedThemeInterface, any>;
export declare const MimeLabel: StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, import("../theme").ResolvedThemeInterface, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
