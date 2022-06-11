import React from 'react';

const Milestone = ({ title, completed, inprogress, last }) => {
    return (
        <div className={`${!last && 'grow'} flex flex-row items-center`}>
            <div
                className={`w-14 h-14 flex flex-row items-center justify-center rounded-full border ${
                    completed || inprogress ? 'bg-[#5a4ad1]' : 'bg-white'
                }`}
            >
                <p
                    className={`${
                        completed || inprogress ? 'text-white' : 'text-black'
                    }`}
                >
                    {title}
                </p>
            </div>

            {!last && (
                <div className="grow bg-gray-200 rounded-full h-[1.5px]">
                    <div
                        className="bg-[#5a4ad1] h-[1.5px]"
                        style={{
                            width: completed
                                ? '100%'
                                : inprogress
                                ? '50%'
                                : '0%',
                        }}
                    ></div>
                </div>
            )}
        </div>
    );
};

export function OnboardingProgress({ items, completed, inprogress }) {
    return (
        <div className="w-full p-8 flex flex-row items-center justify-between relative sm:w-[400px] pt-14">
            {items.map((item, index) => (
                <Milestone
                    key={index}
                    title={item}
                    completed={completed.includes(item)}
                    inprogress={inprogress == item}
                    last={items.length - 1 == index}
                />
            ))}
        </div>
    );
}
