import Image from "next/image";
import Link from "next/link";

export default function AccountDisabled() {
	return (
		<>
			<div className="flex flex-col justify-center items-center w-full min-h-screen">
				<div className="flex flex-col justify-center items-center">
					<Image src="/madrasdaoopsimg.png" height={200} width={200} className="ml-2"/>
					<h3 className="text-3xl text-primary text-center p-2">ACCOUNT DISABLED</h3>
					<h5 className="text-xl text-bg text-center p-2">Your account has been disabled temporarily for violating our policies</h5>
					<p className="text-lg text-primary text-center p-2">If you think this is a mistake please contact us
						at <u>support@madrasda.com</u>
					</p>
					<Link href="/vendor">
						<button className="rounded-lg bg-primary text-white font-semibold px-4 py-3">Back to login</button>
					</Link>
				</div>
			</div>
		</>
	);
}
