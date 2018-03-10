import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Header.scss';

const links = [
    {
        title: "Today's weather",
        url: '/'
    },
    {
        title: "Next days forecast",
        url: '/nextDaysForecast'
    }
]

export default function Header() {
    return (
        <header>
            <ul className={css.menu}>
                {links.map((link, key) => {
                    return (
                        <li className={css.menu__item} key={key}>
                            <NavLink exact activeClassName={css.selected} to={link.url} className={css.menu__link}>
                                {link.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}
