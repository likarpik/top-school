import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({size='medium', children, className, ...props}: ParagraphProps) => {
    return(
        <p
            className={cn(styles.p, className, {
                [styles.large]: size == 'large',
                [styles.medium]: size == 'medium',
                [styles.small]: size == 'small'
            })}
            {...props}
        >
            {children}
        </p>
    );
};