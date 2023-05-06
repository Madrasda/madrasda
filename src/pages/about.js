import ClientLayout from "@/components/layout-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function About () {
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
                OUR USP

                Today, I would like to introduce you to our exciting new marketplace with product fulfilment services. Our platform is designed to make selling and shipping products a seamless and hassle-free experience for both sellers and buyers.

                So, what is our marketplace all about?

                Our platform is an online marketplace that enables sellers to list their products for sale and provide fulfilment services. We handle all aspects of the fulfillment process, from storing inventory to packaging and shipping products to customers.

                As a seller on our platform, you can focus on creating and promoting your products while we take care of the rest. We provide various tools and resources to help you manage your inventory, track orders, and process payments.

                For buyers, our platform provides a seamless and easy-to-use experience. You can browse and purchase products from multiple sellers on our platform and enjoy fast and reliable shipping.


                What sets our platform apart?

                We are not just a traditional marketplace. Our platform offers a unique and personalized approach that ensures both sellers and buyers are satisfied with the fulfillment process.

                We offer a variety of shipping options, including standard and expedited shipping, to meet the needs of all customers. We also provide tracking information for all orders, allowing buyers to stay informed about the status of their purchase.

                Furthermore, our platform provides a marketing and promotion toolkit that helps sellers reach a wider audience. We provide access to a community of like-minded individuals, influencers, and potential customers, which can help drive traffic to their stores and increase sales.

                In addition, our platform provides excellent customer support to both sellers and buyers. Our team is always available to answer any questions or concerns and to ensure that the fulfillment process runs smoothly.

                In conclusion, our marketplace with product fulfillment services offers a unique opportunity for sellers to focus on creating and promoting their products while we take care of the rest. For buyers, we provide a seamless and easy-to-use experience, with fast and reliable shipping. With our personalized approach, seamless platform, and focus on value-added services, we believe that we offer a valuable service to retailers.

                Madras da for Production House
                Movie merchandise has been a significant part of the film industry for decades. It's an excellent way for production companies to extend their brand and make additional revenue from their movies. In this blog, we'll discuss movie merchandise, the benefits of selling it, and how much money production companies can make by selling it.
                Movie merchandise refers to any product that has been produced as a result of a film, such as action figures, t-shirts, posters, and other memorabilia. It's a great way for fans to connect with their favorite movies and characters beyond the film itself.
                One of the primary benefits of selling movie merchandise is that it can generate significant additional revenue for production companies. According to a report by the Licensing Industry Merchandisers Association (LIMA), licensed merchandise sales in North America alone reached $29.6 billion in 2019. This figure includes all forms of licensed merchandise, including those not related to movies, but it's still an indication of how much money can be made from merchandise sales.
                Traditional Way
                When a production company licenses its intellectual property to a merchandising partner, it earns a percentage of the revenue generated from the sale of merchandise. This percentage can vary, but it's typically around 10-15% of the wholesale price of the product. So, if a t-shirt sells for $20, and the production company's percentage is 10%, they would earn $2 from each sale.
                What makes MADRAS DA a unique
                We have meticulously crafted a distinct dashboard for Production Houses, facilitating them to set their own margin with absolute transparency across all aspects. 
                To provide an illustration, if the base product value is 199, you have the freedom to set the MRP at 399.
                This empowers the Production Houses to earn a direct margin without the involvement of any intermediary, thereby ensuring maximum profitability.
                In the event of 1000 products being sold, with an average margin of 200 rupees per product, the Production House stands to earn a substantial sum of 2 lakh rupees.

                The amount of money a production company can make from movie merchandise sales depends on several factors, such as the popularity of the movie, the types of products being sold, and the marketing efforts put into promoting the merchandise.

                For example, the Star Wars franchise is one of the most successful movie merchandise franchises of all time. According to a report by Statista, licensed merchandise sales for Star Wars reached $3.3 billion in 2019. This includes everything from action figures to clothing to video games.

                Other successful movie merchandise franchises include Marvel Cinematic Universe, Harry Potter, and Disney's animated movies. These franchises have generated billions of dollars in merchandise sales over the years.

                In conclusion, movie merchandise is an excellent way for production companies to extend their brand and make additional revenue from their movies. The amount of money that can be made from merchandise sales depends on several factors, but it's clear that successful franchises can generate billions of dollars in revenue. If you're a movie fan, buying merchandise can be a great way to show your support for your favorite films and characters while also contributing to the movie industry's success.

                Welcome to MADRAS DA India's first marketplace for creators!
            </div>
        </main>
        </ClientLayout>
        </>
    )
}