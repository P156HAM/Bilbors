import { Divider, Radio, RadioGroup } from "@nextui-org/react";

interface SortModalProps {
  isMobileSortOpen: boolean;
  setIsMobileSortOpen: (isOpen: boolean) => void;
  applySort: (sortOption: string) => void;
}

function SortModal({
  isMobileSortOpen,
  setIsMobileSortOpen,
  applySort,
}: SortModalProps) {
  const handleSortChange = (sortOption: string) => {
    applySort(sortOption);
    setIsMobileSortOpen(false);
  };

  return (
    <aside
      className={`fixed flex flex-col inset-x-0 inset-y-0 bottom-0 transform ${
        isMobileSortOpen ? "translate-y-1/4" : "translate-y-full"
      } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full lg:hidden`}
    >
      {/* Container for the Close Button */}

      <section className="p-4 flex flex-row justify-between">
        <h1 className=" text-headline text-lg">Sortera</h1>
        <section className="flex justify-end">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileSortOpen(false)}
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

      <RadioGroup
        label="Sortera efter"
        defaultValue="relevans"
        onValueChange={handleSortChange}
        className="p-4"
      >
        <Radio value="relevans">Relevans</Radio>
        <Radio value="högstaPris">Högsta pris</Radio>
        <Radio value="lägstaPris">Lägsta pris</Radio>
        <Radio value="mestSålda">Mest sålda</Radio>
      </RadioGroup>

      <Divider className="my-2" />
      <button
        onClick={() => setIsMobileSortOpen(false)}
        className="absolute inset-x-0 bottom-14 p-2 bg-blue-500 text-white "
      >
        Visa produkter
      </button>
    </aside>
  );
}

export default SortModal;
