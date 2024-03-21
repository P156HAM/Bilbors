import {
  Accordion,
  AccordionItem,
  Divider,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { useState } from "react";
import { SortType } from "../../constants/types";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../redux/actions/actions";
import { RootState } from "../../redux/store";

interface SortModalDesktopProps {}

function SortModalDesktop({}: SortModalDesktopProps) {
  const [sortType, setSortType] = useState<SortType>("relevans");
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter);

  const handleSortChange = (newSortType: SortType) => {
    setSortType(newSortType);
  };

  const handleApplySort = () => {
    dispatch(sortBy({ sortType }));
    console.log("filterState.sort", filterState.sort);
  };

  return (
    <aside className="p-1 hidden lg:flex xl:flex 2xl:flex w-6/7 flex-col">
      <Accordion className="">
        <AccordionItem
          key="1"
          aria-label="Sortera"
          title="Sortera"
          className="p-0"
        >
          <RadioGroup
            label="Sortera efter"
            defaultValue={sortType}
            onValueChange={(value) => handleSortChange(value as SortType)}
          >
            <Radio value="Relevans">Relevans</Radio>
            <Radio value="Högsta Pris">Högsta pris</Radio>
            <Radio value="Lägsta Pris">Lägsta pris</Radio>
            <Radio value="Mest Sålda">Mest sålda</Radio>
          </RadioGroup>
          <Divider className="my-2" />
          <button
            onClick={handleApplySort}
            className="  bg-blue-500 text-white p-2 w-full"
          >
            Spara
          </button>
        </AccordionItem>
      </Accordion>
      <Divider className="my-2" />
    </aside>
  );
}

export default SortModalDesktop;
