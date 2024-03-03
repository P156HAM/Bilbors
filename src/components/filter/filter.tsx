import React, { useState } from "react";
import { FilterState } from "../../constants/types";
import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  Divider,
  Slider,
} from "@nextui-org/react";
import { SliderValue } from "@nextui-org/react";

interface FilterModalProps {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
  applyFilters: (filters: any) => void;
}

function FilterModal({
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  applyFilters,
}: FilterModalProps) {
  const handleClose = () => setIsMobileFilterOpen(false);
  const fixedMinPrice = 100;
  const [filters, setFilters] = useState<FilterState>({
    sort: "",
    priceRange: { min: fixedMinPrice, max: 0 },
    company: "",
  });
  const [selected, setSelected] = React.useState([""]);

  const handleApplyFilters = () => {
    applyFilters({ filters });
    setIsMobileFilterOpen(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

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
    }
  };

  return (
    <aside
      className={`fixed flex flex-col inset-x-0 inset-y-0 bottom-0 transform ${
        isMobileFilterOpen ? "translate-y-1/4" : "translate-y-full"
      } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full lg:hidden`}
    >
      {/* Container for the Close Button */}

      <section className="p-4 flex flex-row justify-between">
        <h1 className=" text-headline text-lg">Filtrera</h1>
        <section className="flex justify-end">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-secondary3 hover:text-secondary1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </section>
      </section>

      <Divider className="my-4" />

      <section className="relative px-4 h-2/3">
        {/* Slider for price range */}
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
              label=""
              defaultValue={[""]}
              onValueChange={setSelected}
              classNames={{
                base: "p-0",
                wrapper: "p-1",
                label: "p-0",
              }}
            >
              <Checkbox value="1">Företag 1</Checkbox>
              <Checkbox value="2">Företag 2</Checkbox>
              <Checkbox value="3">Företag 3</Checkbox>
              <Checkbox value="4">Företag 4</Checkbox>
              <Checkbox value="5">Företag 5</Checkbox>
            </CheckboxGroup>
          </AccordionItem>
        </Accordion>
        <Divider className="my-2" />
        <button
          onClick={handleApplyFilters}
          className="absolute inset-x-0 bottom-14 p-2 bg-blue-500 text-white "
        >
          Visa filtrerade produkter
        </button>
      </section>
    </aside>
  );
}

export default FilterModal;
