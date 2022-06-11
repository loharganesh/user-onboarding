import React, { useRef } from 'react';
import { Icon } from '../icon';

function Radio(props) {
    const { id, name, title, description, icon } = props;

    return (
        <div className="w-[50%] p-3 grow relative">
            <input type="radio" id={id} name={name} className="peer hidden" />
            <label
                htmlFor={id}
                className="absolute w-full h-full border-2 peer-checked:border-[#5a4ad1] rounded-md top-0 right-0 bottom-0 left-0"
            ></label>
            <Icon
                name={icon}
                className={`peer-checked:fill-[#5a4ad1] ml-3 mt-3`}
            />
            <div className="p-3">
                <p className="title mt-2">{title}</p>
                <p className="caption mt-1">{description}</p>
            </div>
        </div>
    );
}

export default Radio;
