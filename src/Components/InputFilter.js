import React from "react";
import { Select, Input } from "antd";

export const InputDrop = (props) => {
    return (
        <div className="flex flex-col">
            <label className="font-[700] text-[13px] leading-[150%]">
                {props.title}
            </label>
            <Select
                // defaultValue={""}
                showSearch
                options={[]}
                placeholder={props.placeholder}
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