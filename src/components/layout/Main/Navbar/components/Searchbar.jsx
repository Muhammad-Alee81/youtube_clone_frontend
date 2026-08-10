import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Searchbar = () => {
  return (
    <>
      <div className="flex w-full max-w-150 items-center max-lg:max-w-100 max-sm:hidden ">
        <div className="flex h-10 w-full overflow-hidden rounded-full border border-gray-300/25 bg-transparent shadow-sm focus-within:border-gray-300/40  ">
          <Input
            type="text"
            placeholder="Search"
            className="h-full  flex-1 rounded-none border-0 px-5  text-sm shadow-none  text-white "
          />

          <button
            type="button"
            className="flex h-full w-16 items-center justify-center  bg-gray-500/25 transition cursor-pointer "
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
