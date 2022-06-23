import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";
import CourseIcon from "./icons/courses.svg";
import ServiceIcon from "./icons/services.svg";
import BookIcon from "./icons/books.svg";
import ProductIcon from "./icons/products.svg";
import { firstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/toppage.interface";
import cn from "classnames";
import Link from "next/link";

const firstLevelMenu: firstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductIcon />, id: TopLevelCategory.Products},
]

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext); 

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <Link href={`/${menu.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id == firstCategory
                            })}>
                                    {menu.icon}
                                    <span>{menu.name}</span>
                                </div>
                            </a>
                        </Link>
                        {menu.id == firstCategory && buildSecondLevel(menu)}
                    </div>
                ))}
            </> 
        );
    };

    const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.seconLevelBlockOpened]: m.isOpened
                        })}>
                        {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`}>
                    <a className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false
                    })}>
                        {p.category}
                    </a>
                </Link>
            ))
        );
    };

    return(
       <div className={styles.menu}>
            {buildFirstLevel()}
       </div>
    );
};
