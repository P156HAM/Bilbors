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
import { RootState } from "../../redux/store";
import { sortBy } from "../../redux/actions/actions";

interface SortModalDesktopProps {}

function SortModalDesktop({}: SortModalDesktopProps) {
  const [sortType, setSortType] = useState<SortType>("relevans");
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter);

  const handleSortChange = (newSortType: SortType) => {
    // Update the local state to reflect the new sort type
    setSortType(newSortType);
    // Dispatch the sortBy action with the new sort type
    dispatch(sortBy({ sortType: newSortType }));
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
            <Radio value="relevans">Relevans</Radio>
            <Radio value="högstaPris">Högsta pris</Radio>
            <Radio value="lägstaPris">Lägsta pris</Radio>
            <Radio value="mestSålda">Mest sålda</Radio>
          </RadioGroup>
        </AccordionItem>
      </Accordion>
      <Divider className="my-2" />
    </aside>
  );
}

export default SortModalDesktop;
