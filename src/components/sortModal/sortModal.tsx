import { Divider, Radio, RadioGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../redux/actions/actions";
import { SortType } from "../../constants/types";
import { RootState } from "../../redux/store";
import DeactiveOverlay from "../deactiveOverlay/deactiveOverlay";
import { useDynamicHeight } from "../../utils/useDynamicHeight";

interface SortModalProps {
  isMobileSortOpen: boolean;
  setIsMobileSortOpen: (isOpen: boolean) => void;
}

function SortModal({ isMobileSortOpen, setIsMobileSortOpen }: SortModalProps) {
  const [sortType, setSortType] = useState<SortType>("Relevans");
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter);
  const dynamicHeight = useDynamicHeight(325);

  const handleSortChange = () => {
    dispatch(sortBy({ sortType }));
    setIsMobileSortOpen(false);
  };

  return (
    <>
      <DeactiveOverlay
        isActive={isMobileSortOpen}
        setIsActive={setIsMobileSortOpen}
        autoDismiss={true}
      />
      <aside
        className={`fixed inset-0 flex flex-col  transform ${
          isMobileSortOpen ? "translate-x-0 translate-y-40" : "translate-y-full"
        } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full lg:hidden xl:hidden 2xl:hidden`}
      >
        {/* Header */}
        <section className="sticky top-0 z-10 px-3 pt-3 pb-1 bg-secondary4 flex flex-row justify-between">
          <h1 className="text-headline font-bold text-lg tracking-wide">
            Sortera
          </h1>
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
        <Divider className="my-2" />

        <RadioGroup
          label={sortType}
          defaultValue={sortType}
          onValueChange={setSortType}
          className="p-4 flex-1 overflow-y-auto p-4"
          style={{ maxHeight: dynamicHeight }}
          classNames={{
            label: "pb-3 text-base font-bold font-subHeadline",
          }}
        >
          <Radio classNames={{ label: "text-base" }} value="Relevans">
            Relevans
          </Radio>
          <Radio classNames={{ label: "text-base" }} value="Högsta Pris">
            Högsta pris
          </Radio>
          <Radio classNames={{ label: "text-base" }} value="Lägsta Pris">
            Lägsta pris
          </Radio>
          <Radio classNames={{ label: "text-base" }} value="Mest Sålda">
            Mest sålda
          </Radio>
        </RadioGroup>

        <div className="p-4 sticky bottom-0 text-white">
          <Divider className="my-2" />
          <button
            onClick={handleSortChange}
            className="  bg-blue-500 text-white p-2 w-full"
          >
            Visa produkter
          </button>
        </div>
      </aside>
    </>
  );
}

export default SortModal;
