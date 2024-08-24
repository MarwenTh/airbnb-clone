"use client";
import useCountries from "@/app/hooks/useCountries";
import React, { FC } from "react";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

type Props = {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

const CountrySelect: FC<Props> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Select a country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className=" flex flex-row items-center gap-3">
            <img
              src={`https://flagcdn.com/24x18/${option.value.toLowerCase()}.png`}
              alt={`${option.label} flag`}
              width="24"
              height="18"
            />
            <div>
              {option.label},
              <span className=" text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-2 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
