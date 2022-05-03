import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium';
    color?: 'red' | 'gray' | 'green' | 'primary' | 'ghost';
    href?: string;
    children: ReactNode;
}