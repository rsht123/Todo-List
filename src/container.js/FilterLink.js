import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
    <NavLink exact to={filter === 'all' ? '/' : '/' + filter} 
            activeStyle={{
                textDecoration: 'none',
                color: 'black'
            }}
    >
        {children}
    </NavLink>
)

export default FilterLink;