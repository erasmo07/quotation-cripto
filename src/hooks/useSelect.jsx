import React, { useState } from 'react';

const useSelect = () => {
    const [value, setValue] = useState('');

    const Element = ({defaultValue, options}) => (
        <select 
            name="currency"
            className='browser-default'
            value={value}
            onChange={e => {setValue(e.target.value)}}>
            <option value=''>-- {defaultValue} --</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    )
    
    return [value, Element]
}

export default useSelect;