import * as React from 'react';
import { memo } from 'react';
import { ICONS } from './registry';

const IconComp = (props) => {
    const { name = '', className } = props;
    return (
        <svg className={`w-[24px] h-[24px] ${className}`} viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d={ICONS[name]} />
        </svg>
    );
};

export const Icon = memo(IconComp);
