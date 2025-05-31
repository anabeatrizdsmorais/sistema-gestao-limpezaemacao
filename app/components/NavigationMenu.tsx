import React, { ReactNode } from 'react'
import style from '../styles/layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={faChevronRight} /> */}

export const NavigationMenu = ({sub1, sub2, sub3, icon}: {sub1: string, sub2: string, sub3: string, icon: ReactNode}) => {
    return (
        <div className={style.title}>
            <h2> {sub1} </h2> {icon} <h3> {sub2} </h3> {icon} <h3> {sub3} </h3> 
        </div>
    )
}
