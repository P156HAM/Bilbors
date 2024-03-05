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
  const [filters, setFilters] = useState<FilterState>({
    priceRange: { min: 100, max: 500 },
    company: "",
  });
  const [selectedCompanies, setSelectedCompanies] = React.useState<string[]>(
    []
  );

  const filterState = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    console.log(filterState);
  }, [filterState]);

  useEffect(() => {
    const body: HTMLElement = document.body;
    if (isMobileFilterOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isMobileFilterOpen]);

  const handleApplyFilters = () => {
    dispatch(updateFilters(filters));
    setIsMobileFilterOpen(false);
  };

  const handlePriceChange = (value: SliderValue) => {
    if (Array.isArray(value) && value.length === 2) {
      const [min, max] = value;
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: { min, max },
      }));
    } else if (typeof value === "number") {
      setFilters((prevFilters) => {
        const currentPriceRange = prevFilters.priceRange || {
          min: 0,
          max: 1000,
        };
        const isUpdatingMin = value < currentPriceRange.max;
        return {
          ...prevFilters,
          priceRange: {
            min: isUpdatingMin ? value : currentPriceRange.min,
            max: isUpdatingMin ? currentPriceRange.max : value,
          },
        };
      });
    }
  };

  const handleCompanyChange = (selected: string[]) => {
    setSelectedCompanies(selected);
    setFilters((prevFilters) => ({
      ...prevFilters,
      company: selected.join(","),
    }));
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
      {isMobileFilterOpen && <div className="overlay"></div>}
      <aside
        className={`fixed inset-0 flex flex-col  transform ${
          isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full lg:hidden`}
      >
        <article className="relative flex-1 overflow-y-auto max-h-[90vh]">
          <section className="sticky top-0 z-10 p-4 bg-secondary4 flex flex-row justify-between">
            <h1 className=" text-headline text-lg">Filtrera</h1>
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

          <section className="relative px-4">
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

            <Accordion className="p-0" showDivider={true}>
              <AccordionItem
                key="1"
                aria-label="Företag"
                title="Företag"
                className="p-0"
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
          <div className="fixed bottom-0 left-0 right-0 p-2 text-white   ">
            <Divider className="my-2" />
            <button
              onClick={handleApplyFilters}
              className="  bg-blue-500 text-white p-2 w-full"
            >
              Visa produkter
            </button>
          </div>
        </article>
      </aside>
    </>
  );
}

export default FilterModal;
