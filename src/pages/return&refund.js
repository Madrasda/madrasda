import ClientLayout from "@/components/layout-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ReturnRefund () {
    const router = useRouter();
    const ctx = useContext(UserContext);
    let isReady = router.isReady;
    const [loading, setLoading] = useState(false);
    const [client, setClient] = useState(false);

    useEffect(() => {
        if (ctx.vendorList !== undefined && ctx.vendorList.length !== 0)
        setLoading(false);
        else {
        setLoading(true);
        }
    }, [ctx.vendorList]);

    if (loading && isReady)
        return (
        <div className='z-50 h-screen w-screen overflow-hidden'>
            <Image
            src='/loader.gif'
            width={1920}
            height={1080}
            className='object-cover object-center w-full h-full'
            alt={"Image"}
            />
        </div>
        );

    return(
        <>
        <ClientLayout>
        <main>
            <div className="font-raj text-base text-black flex flex-wrap justify-center items-center text-justify px-3 py-8 w-full">
                No refunds instead we provide replacement
                As a marketplace, we strive to provide the best possible experience for our customers while ensuring fairness and protection for our sellers. After careful consideration, we have decided to offer replacement instead of refund for the following reasons:
                Protecting Our Sellers: Refunds can pose a significant financial risk to our sellers, particularly for small businesses and independent sellers who may not have the resources to absorb the cost of refunds. By offering replacement, we can ensure that our sellers are protected from financial loss while still providing a satisfactory resolution for our customers.
                Encouraging Responsible Shopping: Offering refunds can encourage irresponsible shopping behavior, such as ordering multiple items with the intention of keeping only one and returning the rest. By offering replacement, we encourage customers to make more responsible purchasing decisions, knowing that they will not receive a refund for items they do not want to keep.
                Minimizing Fraud: Refund requests can be fraudulent, with customers claiming that they never received the item or that it was damaged in transit. By offering replacement, we can minimize the risk of fraudulent refund requests and ensure that only legitimate claims are processed.
                Faster Resolution: Replacement can often be processed faster than refunds, as it eliminates the need for complex financial transactions and ensures that the customer receives a new item as soon as possible. This can result in a more positive customer experience and help to build trust in our platform.
                Overall, we believe that offering replacement instead of refund provides a fair and efficient resolution for both our customers and sellers. We understand that there may be exceptions, such as when the item is out of stock or no longer available, and we will handle those cases on a case-by-case basis.
                <br/>
                Thank you 
                Team Madras Da

                <br/>
                <br/>
                <br/>

                No Cash On Delivery (COD)
                We understand that cash on delivery (COD) is a popular payment method among online shoppers, and it may seem like an attractive option for our marketplace. However, we have made the decision not to entertain COD orders for the following reasons:
                Risk of Fraud: COD orders are susceptible to fraud and scams. Unscrupulous individuals may place orders with no intention of actually receiving the products. This puts our sellers at risk of financial loss and damages our reputation as a trustworthy platform.
                Administrative Burden: COD orders require additional administrative work to manage and track, including handling cash and processing refunds. This puts a strain on our operational resources and can lead to delays in processing orders.
                Limited Geographic Reach: COD orders are typically limited to specific geographic regions where the payment method is popular. This can limit our ability to expand our customer base and increase sales for our sellers.
                Inconvenience to Customers: COD orders require customers to be available to receive the delivery and have cash on hand. This can be inconvenient for customers who prefer the flexibility and convenience of online payments.
                Instead of COD, we offer a range of secure and convenient payment options for our customers, including credit/debit cards, online bank transfers, and e-wallets. These payment options are secure, reliable, and easy to use, providing a seamless shopping experience for our customers while minimizing risk for our sellers.
                We believe that by not entertaining COD orders, we are providing a safer, more efficient, and more convenient shopping experience for our customers and our sellers.
                <br/>
                Thank you 
                Team Madras Da
            </div>
        </main>
        </ClientLayout>
        </>
    )
}