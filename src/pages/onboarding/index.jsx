import React, { useState } from 'react';
import { NameInput } from '../../components/name-input';
import { OnboardingProgress } from '../../components/onboarding-progress';
import { SetupCompleted } from '../../components/setup-completed';
import { WorkspaceSetup } from '../../components/workspace-setup';
import { WorkspaceTypeSelect } from '../../components/workspace-type-select';
import './styles.css';
export const OnBoarding = () => {
    const steps = [1, 2, 3, 4];
    const [completed, setCompleted] = useState([]);
    const [inprogress, setInProgress] = useState(1);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inprogress == steps.length) return;
        setCompleted([...completed, completed.length + 1]);
        setInProgress(completed.length + 2);
    };
    return (
        <div className="h-full flex flex-col items-center p-14">
            <h2 className="heading">Eden</h2>
            <OnboardingProgress
                items={steps}
                completed={completed}
                inprogress={inprogress}
            />
            <form
                className="w-full p-8 mt-8 sm:w-[468px]"
                onSubmit={handleOnSubmit}
            >
                {inprogress == 1 && <NameInput />}
                {inprogress == 2 && <WorkspaceSetup />}
                {inprogress == 3 && <WorkspaceTypeSelect />}
                {inprogress == 4 && <SetupCompleted />}
                <button className="button primary w-full mt-6">
                    {inprogress == steps.length
                        ? 'Launch Eden'
                        : 'Create Workspace'}
                </button>
            </form>
        </div>
    );
};
