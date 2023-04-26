import axios from "axios"
import {useRouter} from "next/router";
import {CircularProgress, Grow, Paper} from "@mui/material";
import {useState} from "react";

export default function VendorQuery(props, resolve, setResolution) {
    const router = useRouter();
    const [spinner, setSpinner] = useState(false);

    const resolveQuery = async () => {
        setSpinner(true);
        axios.put(
            `https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/feedback/toggleFeedbackResolution/${props.queryId}`
        ).then((response) => {
            console.log("resolved");
            setSpinner(false);
        }).catch((err) => {
            setSpinner(false);
            console.log(err);
        });
    }

    return (
        <Grow in timeout={700} >

            <Paper className="container mt-8 w-full" elevation={8}>
                <div className="mx-6 my-6 flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold text-primary">{props.name}</h1>
                        <h3 className="text-base text-gray">{props.email}</h3>
                    </div>
                    <div type className="block w-full text-black bg[#D9D9D9]">
                        {props.query}
                    </div>
                    <div className='w-full flex justify-end'>
                        {spinner && <CircularProgress color={"primary"}/>}
                        <button type="button" className="mt-2 text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5
                    text-center mr-2 mb-2" onClick={resolveQuery}>
                            {
                                resolve ? "Mark as Unresolved" : "Mark as Resolved"
                            }
                        </button>
                    </div>
                </div>
            </Paper>
        </Grow>
    )
}
