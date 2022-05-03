import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";
import styles from "./Button.module.css";


export const Button = ({appearance, children, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    return(
        <button 
            className={cn(styles.button, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == "ghost",
            })}
            {...props}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, className, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};