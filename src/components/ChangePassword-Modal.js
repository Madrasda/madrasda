import {Button, TextField} from "@mui/material";
import {Modal} from "@nextui-org/react";
import {useRef, useState} from "react";
import axios from "axios";

const ChangePasswordModal = () => {
	const [visible, setVisible] = useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};
	const newPasswordRef = useRef();
	const confirmPasswordRef = useRef();
	const changePassword = () => {
		if (newPasswordRef.current.value !== confirmPasswordRef.current.value) {
			axios.put("https://spring-madrasda-2f6mra4vwa-em.a.run.app/?newPassword=" + confirmPasswordRef.current.value , {}, {
				headers: {
					"Authorization": "Bearer " + localStorage.getItem("token")
				}
			});
		}
	}
	return (
		<>
			<Button
				color='standaard'
				variant='outlined'
				onClick={() => setVisible(true)}>
				Change Password
			</Button>
			<Modal
				width='400px'
				preventClose
				open={visible}
				aria-labelledby='modal-title'
				className='font-quest'>
				<Modal.Header className='text-2xl text-primary font-bold'>
					Change Password
				</Modal.Header>
				<Modal.Body>
					<TextField inputRef={newPasswordRef} className='rounded p-3 mb-3'/>
					<TextField inputRef={confirmPasswordRef} className='rounded p-3'/>
				</Modal.Body>
				<Modal.Footer css={{fontFamily: "$algeria"}}>
					<Button color='success' variant={'contained'} onClick={changePassword}>
						Change
					</Button>
					<Button color='error' onClick={closeHandler}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);

}
export default ChangePasswordModal;
