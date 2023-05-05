import React, {useState} from "react";
import Image from "next/image";
import {Alert, Backdrop, CircularProgress, Snackbar} from "@mui/material";
import {uuidv4} from "@firebase/util";
import {Button} from "@mui/material";
import { set_cptable } from "xlsx";
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
set_cptable(cptable);
import XLSX from "xlsx";

export default function ProductTable({products, setProducts}) {
	const [message, setMessage] = useState("");
	const [severity, setSeverity] = useState("");
	const [open, setOpen] = useState(false);
	const [spinner, setSpinner] = useState(false);

	const handleClose = (event, reason) => {
		console.log(reason);
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const getAvailableColors = (colors) => {
		var Available = [];
		colors.forEach((item) => {
			if (Available.indexOf(item.hexValue) === -1) Available.push(item.hexValue);
		});
		return Available;
	};

	const togglePublishStatus = async (id, inSale) => {
		setSpinner(true)
		const response = await fetch("https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/togglePublishState/" + id, {
			method: "PUT", headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		});
		setProducts(old => [...old.map(p => {
			if (p.id === id) p.publishStatus = !p.publishStatus;
			return p;
		})])
		setSpinner(false)
		setOpen(true);
		setMessage(inSale ? "Product unpublished" : "Product published successfully");
		setSeverity("success");
	};

	return (<>
		<Snackbar
			className={"mt-7"}
			open={open}
			autoHideDuration={1400}
			onClose={handleClose}
			anchorOrigin={{vertical: "top", horizontal: "right"}}>
			<Alert variant='filled' onClose={handleClose} severity={severity}>
				{message}
			</Alert>
		</Snackbar>
		<Backdrop
			sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
			open={spinner}
		>
			<CircularProgress className={'text-accent'}/>
		</Backdrop>

		<div className='flex flex-col'>
			<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='flex justify-end mr-8'>
					<Button
						onClick={() => {
							const table = document.getElementById("tablefunda");
							const wb = XLSX.utils.table_to_book(table);
							XLSX.writeFile(wb, "products.xlsx");
						}}>
						<b>Export as Excel</b>
					</Button>
					</div>
				<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
					<div className='text-black'>
						<table className='min-w-full text-center text-sm font-medium' id="tablefunda">
							<thead className='border-b text-m font-bold dark:border-neutral-500'>
							<tr>
								<th scope='col' className=' px-6 py-4'>
									S.No
								</th>
								<th scope='col' className=' px-6 py-4'>
									Product
								</th>
								<th scope='col' className=' px-6 py-4'>
									Profit
								</th>
								<th scope='col' className=' px-6 py-4'>
									Discount
								</th>
								<th scope='col' className=' px-6 py-4'>
									Total Price
								</th>
								<th scope='col' className=' px-6 py-4'>
									Available Colours
								</th>
								<th scope='col' className=' px-6 py-4'>
									In Sale
								</th>
							</tr>
							</thead>
							<tbody>
							{products.map((item, index) => {
								return (<tr key={uuidv4()} className='border-b dark:border-neutral-500'>
									<td className='whitespace-nowrap px-6 py-6 font-medium'>
										{index + 1}
									</td>
									<td className='whitespace-nowrap px-6 py-6'>
										{item.name}
									</td>
									<td className='whitespace-nowrap px-6 py-6'>
										{item.profit}
									</td>
									<td className='whitespace-nowrap px-6 py-6'>
										{item.discount}
									</td>
									<td className='whitespace-nowrap px-6 py-6'>
										{item.total}
									</td>
									<td>
										<div className='flex flex-wrap justify-center space-x-2'>
											{getAvailableColors(item.colors).map((i) => (<div key={uuidv4()}
											                                                  style={{backgroundColor: i}}
											                                                  className='border-gray border-[2px] rounded-full h-4 w-4'></div>))}
										</div>
									</td>
									<td className='whitespace-nowrap px-6 py-6 flex justify-center'>
										<button
											onClick={() => togglePublishStatus(item.id, item.publishStatus)
											}>
											<Image
												src={item.publishStatus ? "/green-tick.png" : "/red-cross.png"}
												alt='publish-status'
												width={20}
												height={20}
											/>
										</button>

									</td>
								</tr>);
							})}
							</tbody>
						</table>
					</div>
				</div>
		</div>
		</div>
	</>);
}
