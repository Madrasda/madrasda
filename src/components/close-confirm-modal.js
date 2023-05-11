import {Button, Modal} from "@nextui-org/react";
import Image from "next/image";
import {useState} from "react";
import {Button as MuiButton} from "@mui/material";

export default function CloseConfirm(props) {
	const [visible, setVisible] = useState(false);
	const handler = () => {
		console.log("modal clicked")
		setVisible(true);
	};

	const closeHandler = () => {
		setVisible(false);
	};

	const deleteTrue = () => {
		if (props.disabled !== undefined) {
			props.toggleMockup();
		}
		closeHandler();
		props.delete(true);
	};

	return (
		<>
			{props.disabled === undefined &&
				<Button
					auto
					ghost
					onPress={handler}
					css={{
						background: "transparent",
						border: "transparent",
						width: "auto",
						height: "auto",
					}}>
					<Image src='/close.png' width={30} height={30}/>

				</Button>
			}
			{props.disabled !== undefined && <MuiButton variant={'contained'} onClick={handler}
			                                            className={ props.disabled ? 'bg-success' : 'bg-error'}
			                                            color={props.disabled ? 'success' : 'error'}>{(props.disabled ? 'Enable' : 'Disable') + " Mockup"}</MuiButton>}
			<Modal
				width='400px'
				preventClose
				open={visible}
				aria-labelledby='modal-title'
				css={{fontFamily: "$algeria"}}>
				<Modal.Header
					css={{
						fontFamily: "$algeria",
						fontSize: "$lg",
					}}>
					Confirm
				</Modal.Header>
				<Modal.Body css={{fontFamily: "$algeria"}}>
					{props.template && (
						<h1 className={"text-center pb-10"}>
							Are you sure you want to delete this template?
						</h1>
					)}
					{props.vendor && (
						<h1 className={"text-center pb-10"}>
							Are you sure you want to delete this vendor?
						</h1>
					)}
					{props.mockup && (
						<>
							<h1 className={"text-center pb-3 font-bold text-lg"}>
								Are you sure you want to disable this mockup?
							</h1>
							<p className={"text-md pb-10"}> This will make the mockup unavailable to all vendors but products
								of this mockup
								will
								still be on sale </p>
						</>
					)}
				</Modal.Body>
				<Modal.Footer css={{fontFamily: "$algeria"}}>
					<Button auto flat color='success' onPress={deleteTrue}>
						Yes
					</Button>
					<Button auto flat color='error' onPress={closeHandler}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
