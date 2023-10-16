import ClientLayout from "@/components/layout-client";
import Head from 'next/head'

export default function PaymentStructure() {
  return (
    <>
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda</title>
      </Head>
      <ClientLayout>
        <main className='p-8 md:pt-20 w-full md:w-1/2 mx-auto'>
          <div className='font-quest text-base text-black flex flex-wrap justify-start items-center text-justify px-3 py-8 w-full'>
            <p className='font-bold text-3xl text-left'>
              Payment Structure Terms & Conditions for Creators on Commission
            </p>
            <br />
            <br />
            Basis These terms and conditions ("Agreement") govern the payment
            structure for creators ("Creator") who sell their products through a
            commission-based model ("Commission Model") with Madras Da Owned By
            I Clothing. By accessing or using the Commission Model, Creators
            agree to be bound by this Agreement.
            <br />
            <br />
            <p className='italic'>Commission Basis</p>
            <br />
            The Commission Model enables Creators to sell their products through
            the Company's platform, and receive payment for such products based
            on a commission structure. The commission percentage ("Commission
            Percentage") payable to Creators for their products sold through the
            Commission Model will be [Percentage], subject to change by the
            Company from time to time.
            <br />
            <br />
            <p className='italic'>Payment Structure</p>
            <br />
            Payment to Creators for their products sold through the Commission
            Model shall be made on a monthly basis, within 30 days after the end
            of the month in which the sale was made. Payment shall be made via
            the payment method selected by the Creator during registration,
            subject to the Company's payment policies.
            <br />
            <br />
            <p className='italic'>Calculation of Payment</p>
            <br />
            Payment to Creators for their products sold through the Commission
            Model shall be calculated based on the Commission Percentage and the
            net revenue ("Net Revenue") earned by the Company from the sale of
            such products. The Net Revenue is defined as the gross revenue
            received by the Company from the sale of the products, less any
            taxes, shipping, refunds, and chargebacks.
            <br />
            <br />
            <p className='italic'>Reporting</p>
            <br />
            The Company shall provide the Creator with regular reports on the
            sales of their products through the Commission Model, including the
            total sales revenue, the Commission Percentage, and the resulting
            commission payments due to the Creator.
            <br />
            <br />
            <p className='italic'>Taxes</p>
            <br />
            Creators shall be responsible for reporting and paying all
            applicable taxes on their commission payments, and shall indemnify
            and hold the Company harmless from any liability arising from such
            taxes.
            <br />
            <br />
            <p className='italic'>Termination</p>
            <br />
            The Company may terminate this Agreement and the Creator's use of
            the Commission Model at any time for any reason, with or without
            notice. Upon termination, the Creator shall be entitled to receive
            payment for any outstanding commission payments earned prior to the
            termination date.
            <br />
            <br />
            <p className='italic'>Governing Law</p>
            <br />
            This Agreement shall be governed by and construed in accordance with
            the laws of the State of Tamilnadu, without regard to its conflicts
            of laws principles.
            <br />
            <br />
            <p className='italic'>Entire Agreement</p>
            <br />
            This Agreement contains the entire agreement between the parties
            with respect to the subject matter hereof and supersedes all prior
            negotiations, understandings, and agreements between the parties,
            whether written or oral.
            <br />
            <br />
            <br />
            <p className='text-center font-bold w-full'>
              By accessing or using the Commission Model, Creators acknowledge
              that they have read and understand this Agreement and agree to be
              bound by its terms and conditions.
            </p>
          </div>
        </main>
      </ClientLayout>
    </>
  );
}