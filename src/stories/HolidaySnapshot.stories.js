import {
    HolidaySnapshot
} from './HolidaySnapshot';

export default {
    title: 'Holiday Snapshot',
    component: HolidaySnapshot,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};