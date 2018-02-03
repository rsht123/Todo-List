import React from 'react';
import FilterLink from '../container.js/FilterLink';

const Footer = () => (
    <span>Show: {'  '}
        <FilterLink filter="all">All</FilterLink> {', '}
        <FilterLink filter="active">Active</FilterLink> {', '}
        <FilterLink filter="completed">Completed</FilterLink>
    </span>
)

export default Footer;