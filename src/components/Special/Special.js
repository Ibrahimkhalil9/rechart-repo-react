import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Special = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get("doer0er")
            .then(data => {
                const lodedData = data.data.data;
                const phoneData = lodedData.map(phone => {
                    const parts = phone.slug.split("-");
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                })
                setPhones(phoneData);
            })
    }, [])
    return (

        <BarChart width={400} height={400}>
            <Bar dataKey="value"></Bar>
            <XAxis dataKey="name"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </BarChart>
    );
};

export default Special;