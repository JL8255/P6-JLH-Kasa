import { Link } from 'react-router-dom'
import LOGO_red from '../assets/LOGO_red.svg';
import styles from '../style/Header.module.scss';
import React, { useState } from 'react';
import Liens from './Liens';

function Header() {
    return (
    <div className={styles.header}>
        <img src={LOGO_red} alt="logo" />
        <Liens/>
    </div>
    )
}

export default Header