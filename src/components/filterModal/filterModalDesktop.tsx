import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  Divider,
  Radio,
  RadioGroup,
  Slider,
  SliderValue,
} from "@nextui-org/react";
import React, { useState } from "react";

interface FilterState {
  sort: string;
  priceRange: {
    min: number;
    max: number;
  };
  company: string[]; // Adjusted to be an array of strings
}

interface FilterModalDesktopProps {
  applyFilters: (filters: any) => void;
}

function FilterModalDesktop({ applyFilters }: FilterModalDesktopProps) {
  const fixedMinPrice = 100;
  const [filters, setFilters] = useState<FilterState>({
    sort: "",
    priceRange: { min: fixedMinPrice, max: 500 },
    company: [],
  });

  const handlePriceChange = (value: SliderValue) => {
    if (Array.isArray(value) && value.length === 2) {
      const [min, max] = value;
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: {
          min,
          max,
        },
      }));
      // Apply filters immediately
      applyFilters({ ...filters, priceRange: { min, max } });
    }
  };

  const handleCompanyChange = (selectedCompanies: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      company: selectedCompanies,
    }));
    // Apply filters immediately
    applyFilters({ ...filters, company: selectedCompanies });
  };

  return (
    <aside className="p-1 hidden lg:flex xl:flex 2xl:flex w-6/7 flex-col">
      <Accordion className="">
        <AccordionItem
          key="1"
          aria-label="Filtrera"
          title="Filtrera"
          className="p-0"
        >
          <Slider
            label="Pris"
            step={1}
            minValue={0}
            maxValue={1000}
            defaultValue={[100, 500]}
            formatOptions={{ style: "currency", currency: "SEK" }}
            className="max-w-md min-h-14 py-2"
            onChange={handlePriceChange}
            onChangeEnd={handlePriceChange}
          />
          <Divider className="my-2" />
          {/* Company Filter */}

          <Accordion className="p-0" showDivider={true}>
            <AccordionItem
              key="1"
              aria-label="Företag"
              title="Företag"
              className="p-0"
            >
              <CheckboxGroup
                defaultValue={[]}
                onValueChange={handleCompanyChange}
                className="p-1"
              >
                <Checkbox value="1">Företag 1</Checkbox>
                <Checkbox value="2">Företag 2</Checkbox>
                <Checkbox value="3">Företag 3</Checkbox>
                <Checkbox value="4">Företag 4</Checkbox>
                <Checkbox value="5">Företag 5</Checkbox>
              </CheckboxGroup>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default FilterModalDesktop;
