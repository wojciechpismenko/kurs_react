import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li><Link href="/">Twitters</Link></li>
    <li><Link href="/articles">Articles</Link></li>
    <li><Link href="/notes">Notes</Link></li>
  </ul>
);

export default Navigation;