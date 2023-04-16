import Link from "next/link";

const Login = (props) => {
    return <>
        <h1 className='text-2xl text-white font-medium mt-2 mb-12 text-center'>
            LOGIN
        </h1>
        <div>
            <label htmlFor="number" className="text-white">Phone Number</label>
            <input
                type="phone number"
                className={"w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                id="number"
                ref={props.phoneRef}
                required={true}
            />
        </div>

        <div className="flex justify-center items-center mt-4">

            <button
                className={`bg-[#A5153F] cursor-pointer py-2 px-5 text-l text-white rounded focus:outline-none `}
                onClick={props.submitPhoneHandler}>
                Login
            </button>

        </div>

        <div className="w-100 underline text-white text-sm text-center mt-3">
            <Link href="/vendor">
                Click to Vendor Login
            </Link>
        </div>
    </>;

}
export default Login
