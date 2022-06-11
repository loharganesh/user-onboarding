import React from 'react';
import Radio from '../radio';

export function WorkspaceTypeSelect() {
    return (
        <div className="w-full grow">
            <h2 className="heading text-center">
                How are you planning to use Eden?
            </h2>
            <p className="caption text-center mt-1">
                We'll streamline your setup experience accordingly
            </p>
            <div className="flex flex-row mt-8 gap-4">
                <Radio
                    id="personal"
                    name="workspace-selector"
                    title="For myself"
                    description="Write better, Think more clearly, Stay organized"
                    icon="USER"
                />
                <Radio
                    id="team"
                    name="workspace-selector"
                    title="With my team"
                    description="Wikis, docs, tasks, projects, all in one place"
                    icon="USER_GROUP"
                />
            </div>
        </div>
    );
}
