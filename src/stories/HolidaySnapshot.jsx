import React from 'react';
import PropTypes from 'prop-types';
import './HolidaySnapshot.scss';

export const HolidaySnapshot = ({ size, primaryLabel, secondaryLabel, ...props }) => {

    function handleClick(event) {
        console.log(event.target.innerHTML);
    }

    return (
        <div className="holiday-snapshot holiday-snapshot__container">
            <h2 className="holiday-snapshot__title">Holiday Snapshot</h2>
            <hr className="holiday-snapshot__divider" />
            <span>Progress Bar</span>
            <div className="holiday-snapshot__button-container">
                <button
                    type="button"
                    onClick={handleClick}
                    className={['holiday-snapshot__button holiday-snapshot__button--secondary', `holiday-snapshot__button--${size}`].join(' ')}
                    {...props}
                >
                    {secondaryLabel}
                </button>
                <button
                    type="button"
                    onClick={handleClick}
                    className={['holiday-snapshot__button holiday-snapshot__button--primary', `holiday-snapshot__button--${size}`].join(' ')}
                    {...props}
                >
                    {primaryLabel}
                </button>
            </div>
        </div>
    );
};

HolidaySnapshot.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    primaryLabel: PropTypes.string.isRequired,
    secondaryLabel: PropTypes.string.isRequired,
};

HolidaySnapshot.defaultProps = {
    size: 'medium',
    primaryLabel: 'New request',
    secondaryLabel: 'Show detail',
};
