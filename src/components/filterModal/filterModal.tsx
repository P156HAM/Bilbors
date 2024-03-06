import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterState } from "../../constants/types";
import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  Divider,
  Slider,
} from "@nextui-org/react";
import { updateFilters } from "../../redux/actions/actions";
import { SliderValue } from "@nextui-org/react";
import { RootState } from "../../redux/store";
import DeactiveOverlay from "../deactiveOverlay/deactiveOverlay";

interface FilterModalProps {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}

function FilterModal({
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}: FilterModalProps) {
  const dispatch = useDispatch();
  const handleClose = () => setIsMobileFilterOpen(false);
  const [selectedCompanies, setSelectedCompanies] = React.useState<string[]>(
    []
  );

  const filterState = useSelector((state: RootState) => state.filter);
  const { min, max } = filterState.priceRange || { min: 0, max: 1000 };

  const handleApplyFilters = () => {
    const newFilters = {
      priceRange: { min, max },
      company: selectedCompanies.join(","),
    };

    dispatch(updateFilters(newFilters));
    setIsMobileFilterOpen(false);
  };

  const handlePriceChange = (value: SliderValue) => {
    if (Array.isArray(value) && value.length === 2) {
      dispatch(
        updateFilters({
          ...filterState,
          priceRange: { min: value[0], max: value[1] },
        })
      );
    } else if (typeof value === "number") {
      const { min: currentMin, max: currentMax } = filterState.priceRange || {
        min: 0,
        max: 1000,
      };
      if (value < currentMax) {
        dispatch(
          updateFilters({
            ...filterState,
            priceRange: { min: value, max: currentMax },
          })
        );
      } else {
        dispatch(
          updateFilters({
            ...filterState,
            priceRange: { min: currentMin, max: value },
          })
        );
      }
    }
  };

  const handleCompanyChange = (selected: string[]) => {
    setSelectedCompanies(selected);
    dispatch(updateFilters({ ...filterState, company: selected.join(",") }));
  };

  const companies: string[] = [
    "H&M",
    "Rusta",
    "Almondy",
    "Gina Tricot",
    "Kappahl",
    "Lindex",
    "Jysk",
    "Jotex",
    "Lager 157",
    "Newport",
    "Santa Maria",
    "Hellman's",
    "OLW",
    "Paulíns",
    "Sportshopen",
  ];

  return (
    <>
      <DeactiveOverlay
        isActive={isMobileFilterOpen}
        setIsActive={setIsMobileFilterOpen}
        autoDismiss={true}
      />
      <aside
        className={`fixed inset-0 flex flex-col  transform ${
          isMobileFilterOpen ? "translate-x-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full lg:hidden xl:hidden 2xl:hidden`}
      >
        {/* Header */}
        <section className="sticky top-0 z-10 px-3 pt-3 pb-0 bg-secondary4 flex flex-row justify-between">
          <h1 className="text-headline font-bold text-lg tracking-wide">
            Filtrera
          </h1>
          <section className="flex justify-end">
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
        {/* Filter content */}
        <section className="flex-1 overflow-y-auto p-4 max-h-[80vh]">
          <Slider
            label="Pris"
            step={1}
            minValue={0}
            maxValue={1000}
            value={[min, max]}
            formatOptions={{ style: "currency", currency: "SEK" }}
            className="custom-slider max-w-md min-h-14 py-2"
            classNames={{
              label: "text-base font-subHeadline tracking-wide",
            }}
            onChange={handlePriceChange}
            onChangeEnd={handlePriceChange}
          />
          <Divider className="my-2" />

          <Accordion className="p-0" showDivider={true}>
            <AccordionItem
              key="1"
              aria-label="Företag"
              title="Företag"
              className="p-0 "
              classNames={{
                title: "text-base font-subHeadline tracking-wide",
              }}
            >
              <CheckboxGroup
                defaultValue={selectedCompanies}
                onValueChange={handleCompanyChange}
                classNames={{
                  base: "p-0 ",
                  wrapper: "p-1",
                  label: "p-0",
                }}
              >
                {companies.map((company, index) => (
                  <Checkbox key={index} value={company}>
                    {company}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </AccordionItem>
          </Accordion>
        </section>
        {/* Apply button */}
        <div className="p-4 sticky bottom-0 text-white">
          <Divider className="my-2" />
          <button
            onClick={handleApplyFilters}
            className="  bg-blue-500 text-white p-2 w-full"
          >
            Visa produkter
          </button>
        </div>
      </aside>
    </>
  );
}

export default FilterModal;
