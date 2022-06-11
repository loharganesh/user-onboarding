import React from 'react';

export function WorkspaceSetup() {
    return (
        <div className="w-full">
            <h2 className="heading text-center">
                Let's setup a home for your work
            </h2>
            <p className="caption text-center mt-1">
                You can always create another workspace later
            </p>
            <p className="title mt-8">Workspace Name</p>
            <input className="input w-full mt-2" placeholder="Eden" />
            <p className="mt-6">
                <span className="title mt-6">Workspace URL </span>
                <span className="caption">(optional)</span>
            </p>
            <div className="flex flex-row items-center border-2 bg-slate-100 rounded-md mt-2">
                <p className="mx-5 text-slate-500">www.eden.com/</p>

                <input
                    className="w-full plain-input rounded-r-md border-l-2"
                    placeholder="Example"
                />
            </div>
        </div>
    );
}
