import { Divider, Radio, RadioGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../redux/actions/actions";
import { SortType } from "../../constants/types";
import { RootState } from "../../redux/store";

interface SortModalProps {
  isMobileSortOpen: boolean;
  setIsMobileSortOpen: (isOpen: boolean) => void;
  applySort: (sortType: string) => void;
}

function SortModal({
  isMobileSortOpen,
  setIsMobileSortOpen,
  applySort,
}: SortModalProps) {
  const [sortType, setSortType] = useState<SortType>("relevans");
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter);
  console.log(sortType);

  const handleSortChange = () => {
    dispatch(sortBy({ sortType }));
    applySort(sortType);
    setIsMobileSortOpen(false);

    console.log("hej", filterState);
  };

  useEffect(() => {
    const body: HTMLElement = document.body;
    if (isMobileSortOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isMobileSortOpen]);

  return (
    <>
      {isMobileSortOpen && <div className="overlay"></div>}
      <aside
        className={`fixed inset-0 flex flex-col  transform ${
          isMobileSortOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full lg:hidden`}
      >
        <article className="relative flex-1 overflow-y-auto max-h-[90vh]">
          <section className="sticky top-0 z-10 p-4 bg-secondary4 flex flex-row justify-between">
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
            defaultValue={sortType}
            onValueChange={setSortType}
            className="p-4"
          >
            <Radio value="relevans">Relevans</Radio>
            <Radio value="högstaPris">Högsta pris</Radio>
            <Radio value="lägstaPris">Lägsta pris</Radio>
            <Radio value="mestSålda">Mest sålda</Radio>
          </RadioGroup>

          <div className="fixed bottom-0 left-0 right-0 p-2 text-white   ">
            <Divider className="my-2" />
            <button
              onClick={handleSortChange}
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

export default SortModal;
