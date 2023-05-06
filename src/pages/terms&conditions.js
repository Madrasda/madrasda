import ClientLayout from "@/components/layout-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function TandS () {
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
                Terms and Conditions for a Marketplace Where Content Creators Sell Their Merchandise

                <br/>
                <br/>
                <br/>

                Welcome to our marketplace where content creators can sell their merchandise! These Terms and Conditions (the "Agreement") govern your use of our website and services, so please read them carefully before using our platform.
                Acceptance of Terms
                By accessing and using our website and services, you agree to be bound by this Agreement. If you do not agree to these terms and conditions, you may not use our platform.
                Content Creators
                You represent and warrant that you are the owner of all content and intellectual property rights in any products, designs, or merchandise that you offer for sale on our marketplace. You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of this representation and warranty.
                Account Registration
                In order to sell your merchandise on our marketplace, you must register for an account. You must provide accurate and complete information during the registration process and keep your account information up to date. You are responsible for maintaining the security of your account and for any activity that occurs under your account.
                Product Listings
                You may list your merchandise for sale on our marketplace in accordance with our listing guidelines. You are solely responsible for the accuracy and completeness of your product listings. You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made
                These terms and conditions ("Agreement") govern the use of the marketplace ("Marketplace") by content creators ("Creators") to sell their merchandise ("Merchandise"). By accessing or using the Marketplace, Creators agree to be bound by this Agreement. The Marketplace is operated by [Marketplace Operator], a [State] corporation with its principal place of business at [Address] ("Operator").
                Eligibility
                To use the Marketplace, Creators must be at least 18 years of age and have the legal capacity to enter into contracts. Creators must also have an active account on the Marketplace, which requires registration and acceptance of the Marketplace's terms of service.
                
                <br/>
                <br/>
                <br/>

                Creation and Sale of Merchandise
                Creators are solely responsible for creating and selling their Merchandise on the Marketplace. Creators warrant and represent that all Merchandise offered for sale on the Marketplace is original work, and that they own or have obtained all necessary rights to the content and intellectual property contained therein. Creators are responsible for ensuring that their Merchandise complies with all applicable laws, rules, and regulations.
                Fees and Payments
                Creators shall pay Operator a transaction fee of [Percentage] of the sale price for each item of Merchandise sold through the Marketplace. Creators are responsible for setting the sale price for their Merchandise, and may adjust the sale price at any time, subject to the Marketplace's policies. Payment for Merchandise sold on the Marketplace shall be processed through Operator's payment processing system, and Creators shall receive payment for their sales in accordance with the Marketplace's payment policies.
                Refunds and Returns
                Our Platform Madras Da is solely responsible for providing any necessary customer support, refunds, returns, and exchanges related to their Merchandise. Creators must comply with the Marketplace's policies regarding refunds and returns, and must respond promptly to any customer inquiries or complaints. Creators shall indemnify and hold Operator harmless from any and all liability arising from Creators' handling of refunds, returns, and exchanges.
                Intellectual Property
                Creators retain all rights to the content and intellectual property contained in their Merchandise, subject to the license granted to Operator in this Agreement. Creators grant Operator a non-exclusive, worldwide, royalty-free license to use, reproduce, distribute, and display the content and intellectual property contained in their Merchandise for the purpose of promoting and operating the Marketplace.
                Prohibited Content
                Creators are prohibited from offering for sale any Merchandise that contains content that is illegal, obscene, defamatory, or infringes on the intellectual property or privacy rights of others. Operator reserves the right to remove any Merchandise from the Marketplace that violates this provision.
                Termination
                Operator may terminate this Agreement and Creators' use of the Marketplace at any time for any reason, with or without notice. Creators may terminate this Agreement by closing their account on the Marketplace. Termination of this Agreement shall not relieve Creators of their obligations to fulfil any outstanding orders for Merchandise.
                
                <br/>
                <br/>
                <br/>

                Limitation of Liability
                Operator shall not be liable to Creators or any third party for any damages, including without limitation, direct, indirect, incidental, consequential, special or exemplary damages, arising out of or in connection with this Agreement or the use of the Marketplace.
                
                <br/>
                <br/>
                <br/>

                Governing Law
                This Agreement shall be governed by and construed in accordance with the laws of the State of Tamilnadu India, without regard to its conflicts of laws principles.

                <br/>
                <br/>
                <br/>

                Entire Agreement
                This Agreement contains the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior negotiations, understandings, and agreements between the parties, whether written or oral.

                <br/>
                <br/>
                <br/>

                By accessing or using the Marketplace, Creators acknowledge that they have read and understand this Agreement and agree to be bound by its
            </div>
        </main>
        </ClientLayout>
        </>
    )
}