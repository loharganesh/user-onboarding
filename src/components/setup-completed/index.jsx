import React from 'react';
import { Icon } from '../icon';

export function SetupCompleted() {
    return (
        <div className="w-full flex flex-col">
            <Icon
                name="CHECKMARK"
                className="w-14 h-14 self-center fill-[#5a4ad1]"
            />
            <h2 className="heading text-center mt-8">Congratulations Eren</h2>
            <p className="caption text-center mt-1">
                You have completed onboarding, you can start using Eden!
            </p>
        </div>
    );
}
