import React, { useState, useEffect } from 'react';

function CountryDropdown({ pText, inputHolder, inIcon  }) {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data.map(country => country.name.common));
            })
            .catch(error => console.error(error));
    }, []);

    function handleSelect(e) {
        setSelectedCountry(e.target.value);
    }

    return (
        <div>
            <p>{pText}</p>
            <div className="field-group">
                <select 
                    value={selectedCountry} 
                    onChange={handleSelect}
                    className='field-group-input' 
                >
                    <option value="">{inputHolder}</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <div className="field-group-icon">
                    <i className={inIcon} aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default CountryDropdown;
