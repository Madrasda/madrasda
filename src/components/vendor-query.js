import axios from "axios"
import { useRouter } from "next/router";

export default function VendorQuery(props) {
    const router = useRouter();

    const resolveQuery = async () => {
        axios.put(
            `https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/feedback/toggleFeedbackResolution/${props.queryId}`
        ).then((response) => {
            console.log("resolved");
        }).catch((err) => {
            console.log(err);
        });
        router.reload();
    }

    return (
        <div className="container mt-8 bg-[#D9D9D9] rounded-lg w-full">
            <div className="mx-6 my-6 flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-primary">{props.name}</h1>
                <h3 className="text-base text-gray">{props.email}</h3>
              </div>
                <div type className="block w-full text-black bg[#D9D9D9]">
                    {props.query}
                </div>
                <div className='w-full flex justify-end'>
                    <button type="button" className="mt-2 text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={resolveQuery} >
                        {
                            props.resolve ? "Mark as Unresolved" : "Mark as Resolved"
                        }
                    </button>
                </div>
            </div>
        </div>
    )    
}
