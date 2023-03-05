export default function SearchVendor() {
    return (
      <>
        <div>
            <div className="w-96 scale-125">
                <div className="relative flex flex-wrap w-[80%]">
                    <input
                    type="search"
                    className="relative m-0 block w-[1%] min-w-0 flex-auto border border-t-0 border-r-0 border-l-0 border-b-2 border-bg bg-none bg-clip-padding text-sm font-normal outline-none transition duration-300 ease-in-out focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" />
                    <span
                    className="input-group-text text-primary flex items-center whitespace-nowrap rounded text-center text-base"
                    id="basic-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 cursor-pointer">
                        <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
      </>
    )
  }