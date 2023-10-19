import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './HolidaySnapshot.scss';

export const HolidaySnapshot = ({ booked, primaryLabel, secondaryLabel, ...props }) => {

    function handleClick(event) {
        console.log(`${event.target.innerHTML} button was clicked`);
    }

    return (
        <div className="holiday-snapshot holiday-snapshot__container">
            <h2 className="holiday-snapshot__title">Holiday Snapshot</h2>
            <hr className="holiday-snapshot__divider" />
            <div className="holiday-snapshot__progress-bar">
                <span className="holiday-snapshot__progress-bar--fill" style={{
                    width: `${booked}%`
                }}>
                    &nbsp;
                </span>
            </div>
            <div className="holiday-snapshot__button-container">
                <button
                    type="button"
                    onClick={handleClick}
                    className="holiday-snapshot__button holiday-snapshot__button--secondary"
                    {...props}
                >
                    {secondaryLabel}
                </button>
                <button
                    type="button"
                    onClick={handleClick}
                    className="holiday-snapshot__button holiday-snapshot__button--primary"
                    {...props}
                >
                    {primaryLabel}
                </button>
            </div>
        </div>
    );
};

HolidaySnapshot.propTypes = {
    booked: PropTypes.number,
    primaryLabel: PropTypes.string.isRequired,
    secondaryLabel: PropTypes.string.isRequired,
};

HolidaySnapshot.defaultProps = {
    booked: '50',
    primaryLabel: 'New request',
    secondaryLabel: 'Show detail',
};

HolidaySnapshot.argTypes = {
    booked: {
        control: { type: 'range', min: 0, max: 100, step: 1 }
    }
}