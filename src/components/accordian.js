export default function Accordian () {
    return (
        <>
            <div id="accordionFlushExample">
                <div
                    className="rounded-none border border-t-0 border-l-0 border-r-0 border-gray bg-white">
                    <h2 className="mb-0" id="flush-headingOne">
                    <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne">
                        Accordion Item #1
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h2>
                    <div
                    id="flush-collapseOne"
                    className="!visible border-0"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="flush-headingOne"
                    data-te-parent="#accordionFlushExample">
                    <div className="py-4 px-5">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the
                        <code>.accordion-flush</code> className. This is the first item's
                        accordion body.
                    </div>
                    </div>
                </div>
                <div
                    className="rounded-none border border-l-0 border-r-0 border-t-0 border-gray bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="flush-headingTwo">
                    <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                        Accordion Item #2
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h2>
                    <div
                    id="flush-collapseTwo"
                    className="!visible hidden border-0"
                    data-te-collapse-item
                    aria-labelledby="flush-headingTwo"
                    data-te-parent="#accordionFlushExample">
                    <div className="py-4 px-5">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the
                        <code>.accordion-flush</code> className. This is the second item's
                        accordion body. Let's imagine this being filled with some actual
                        content.
                    </div>
                    </div>
                </div>
                <div
                    className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-gray bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="flush-headingThree">
                    <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Accordion Item #3
                        <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </h2>
                    <div
                    id="flush-collapseThree"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="flush-headingThree"
                    data-te-parent="#accordionFlushExample">
                    <div className="py-4 px-5">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the
                        <code>.accordion-flush</code> className. This is the third item's
                        accordion body. Nothing more exciting happening here in terms of
                        content, but just filling up the space to make it look, at least
                        at first glance, a bit more representative of how this would look
                        in a real-world application.
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}