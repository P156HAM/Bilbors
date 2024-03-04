import {
  Accordion,
  AccordionItem,
  Divider,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

interface SortModalDesktopProps {
  applySort: (sortOption: string) => void;
}

function SortModalDesktop({ applySort }: SortModalDesktopProps) {
  const handleSortChange = (sortOption: string) => {
    applySort(sortOption);
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
            defaultValue="relevans"
            onValueChange={handleSortChange}
            className=""
          >
            <Radio value="relevans">Relevans</Radio>
            <Radio value="högstaPris">Högsta pris</Radio>
            <Radio value="lägstaPris">Lägsta pris</Radio>
            <Radio value="mestSålda">Mest sålda</Radio>
          </RadioGroup>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default SortModalDesktop;
