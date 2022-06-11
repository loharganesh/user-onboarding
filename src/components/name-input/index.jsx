import React from 'react';

export function NameInput() {
    return (
        <div className="w-full">
            <h2 className="heading text-center">
                Welcome! First things first...
            </h2>
            <p className="caption text-center mt-1">
                You can always change them later
            </p>
            <p className="title mt-8">Full Name</p>
            <input className="input w-full mt-2" placeholder="Steve Jobs" />
            <p className="title mt-8">Display Name</p>
            <input className="input w-full mt-2" placeholder="Steve" />
        </div>
    );
}
