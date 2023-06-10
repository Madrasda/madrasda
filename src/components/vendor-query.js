import axios from "axios";
import { useRouter } from "next/router";
import { Button, CircularProgress, Grow, Paper } from "@mui/material";
import { useState } from "react";

export default function VendorQuery(props) {
  const router = useRouter();
  const [spinner, setSpinner] = useState(false);

  const resolveQuery = async () => {
    setSpinner(true);
    axios
      .put(
        `https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/feedback/toggleFeedbackResolution/${props.queryId}`
      )
      .then((response) => {
        setSpinner(false);
        props.setResolution(props.queryId);
      })
      .catch((err) => {
        setSpinner(false);
        console.log(err);
      });
  };
  const delay = props.i * 80 + "ms";
  return (
    <Grow in timeout={600} style={{ transitionDelay: delay }}>
      <Paper className="container mt-8 w-full" elevation={8}>
        <div className="mx-6 my-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">{props.name}</h1>
            <h3 className="text-base text-black">{props.email}</h3>
          </div>
          <div className="block w-full text-black bg[#D9D9D9]">
            {props.query}
          </div>
          <div
            className={(spinner ? "mr-7" : "") + " w-full flex justify-end "}
          >
            {spinner && <CircularProgress color={"primary"} />}
            {!spinner && (
              <Button
                type="button"
                variant={"contained"}
                className="mt-2 text-white font-medium rounded-full text-sm px-5 py-2.5
                    text-center mr-2 mb-2"
                onClick={resolveQuery}
              >
                {props.resolve ? "Mark as Unresolved" : "Mark as Resolved"}
              </Button>
            )}
          </div>
        </div>
      </Paper>
    </Grow>
  );
}
