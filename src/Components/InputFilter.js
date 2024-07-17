import React, { useState, useEffect } from "react";
import { Select, Input } from "antd";

export const InputDrop = (props) => {
    const dataProps = props.dataFilter;
    const [newData, setNewData] = useState([]);
    const typeDat = props.type;

    useEffect(() => {
        let temp = []
        if (dataProps) {
            for (let i = 0; i < dataProps.length; i++) {
                temp = [...temp, { value: dataProps[i][typeDat], label: dataProps[i][typeDat] }]
            }
        }
        setNewData(temp)

    }, [dataProps, typeDat])

    return (
        <div className="flex flex-col">
            <label className="font-[700] text-[13px] leading-[150%]">
                {props.title}
            </label>
            <Select
                showSearch
                options={newData}
                filterOption={(input, option) => {
                    console.log((option?.label ?? '').toLowerCase().includes(input.toLowerCase()))
                    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                }
                placeholder={props.placeholder}
                onSearch={props.onSearchID}
                onChange={props.onChangeID}
                optionFilterProp="label"
            />
        </div>
    );
}

export const InputS = (props) => {
    return (
        <div className="flex flex-col">
            <label className="font-[700] text-[13px] leading-[150%]">
                {props.title}
            </label>
            <Input
                placeholder={props.placeholder}
            />
        </div>
    );
}