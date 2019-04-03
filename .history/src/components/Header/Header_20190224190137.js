import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = () => (
  <div>

    <HeaderNavigation />
    <Button></Button>
  </div>
);

export default Header;