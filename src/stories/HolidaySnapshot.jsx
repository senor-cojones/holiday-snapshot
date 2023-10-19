import React from 'react';
import PropTypes from 'prop-types';
import './holidaySnapshot.css';

export const HolidaySnapshot = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'holiday-snapshot--primary' : 'holiday-snapshot--secondary';
    return (
        <button
            type="button"
            className={['holiday-snapshot', `holiday-snapshot--${size}`, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

HolidaySnapshot.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

HolidaySnapshot.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
