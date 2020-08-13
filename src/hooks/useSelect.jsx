import React, { Fragment, useState } from 'react';

const useSelect = (defaultValue, options) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    const Element = () => (
        <Fragment >
            <select 
                name="currency"
                className='browser-default'
                onChange={handleChange}>
                <option value={value}>-- {defaultValue} --</option>
                {options.map((option) => (
                    <option 
                        key={option.value}
                        value={option.value}
                    >{option.name}</option>
                ))}
            </select>
        </Fragment>
    )

    return [value, Element]
}

export default useSelect;