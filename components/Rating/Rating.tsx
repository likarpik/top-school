import { useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";


export const Rating = ({isEditable=false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i:number) => {
            return (
                <StarIcon 
                    className={cn(styles.star, {
                        [styles.filled]: i<currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i+1)}
                    onClick={() => changeDisplay(i+1, "click")}
                />
            );
        });

        setRatingArray(updateArray);
    };

    const changeDisplay = (i: number, click?: string) => {
        if (!isEditable) {
            return;
        }

        if (click && click == "click") {
            if (!setRating) {
                return;
            }
            setRating(i);
        } else {
            constructRating(i);
        }
    };

    return(
        <div {...props}
            onMouseLeave={(): void => { changeDisplay(rating); }}
        >
           {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};