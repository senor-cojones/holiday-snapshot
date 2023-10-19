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