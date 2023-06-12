import ClientLayout from "@/components/layout-client";
import Head from "next/head";

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda</title>
      </Head>
      <ClientLayout>
        <main className='p-8 md:pt-20 w-full md:w-1/2 mx-auto'>
          <div className='font-quest text-base text-black flex flex-wrap justify-start items-center text-justify px-3 py-8 w-full'>
            <p className='text-3xl font-bold text-left'>Shipping Policy</p>
            <br />
            Thank you for choosing Madrasda.com! We aim to provide you with a
            seamless and satisfactory shopping experience. This Shipping Policy
            outlines the details of our shipping process, including order
            processing and estimated delivery times. Order Processing: Order
            Confirmation: Once you place an order on Madrasda.com, you will
            receive an order confirmation email containing the details of your
            purchase. Please review the information carefully and notify us
            immediately if any corrections are needed. Order Processing Time: We
            strive to process and prepare your order for shipment as quickly as
            possible. Our standard order processing time is 48 hours (excluding
            weekends and public holidays). During peak seasons or promotional
            periods, it may take an additional 1-2 business days to process your
            order. Order Modifications/Cancellations: If you need to modify or
            cancel your order, please contact our customer support team within
            24 hours of placing your order. We will do our best to accommodate
            your request, but please note that once the order has been processed
            and shipped, modifications or cancellations may no longer be
            possible. Shipping: Shipping Methods: We offer reliable and secure
            shipping methods to deliver your orders. The available shipping
            options will be presented to you during the checkout process. Please
            choose the option that best suits your needs. Shipping Time: The
            estimated shipping time will depend on your location and the
            selected shipping method. Once your order has been shipped, you will
            receive a shipping confirmation email containing a tracking number,
            allowing you to monitor the progress of your delivery. Estimated
            Delivery Time: While we strive to deliver your order within the
            shortest possible time, please note that delivery times may vary
            depending on external factors such as weather conditions, customs
            procedures, and courier service delays. As a general guideline, you
            can expect your order to arrive within [insert estimated delivery
            time based on your shipping method and location, e.g., 3-7 business
            days for domestic shipping]. International Shipping: We offer
            international shipping to select countries. Please note that
            international orders may be subject to customs duties, taxes, and
            additional fees imposed by the destination country. These charges
            are the responsibility of the customer and are not included in the
            product price or shipping cost. Please check with your local customs
            office for further information regarding any applicable fees. Order
            Tracking: To track your order, please use the tracking number
            provided in the shipping confirmation email. You can enter the
            tracking number on our website or directly on the courier's website
            to get real-time updates on the status of your shipment.
            Undeliverable Packages: In the event that a package is deemed
            undeliverable due to an incorrect address, refusal to accept the
            package, or failure to collect it from the courier's depot within a
            specified timeframe, the customer will be responsible for any
            additional shipping charges incurred for reshipment. Please note
            that the shipping policy outlined above is subject to change without
            prior notice. For any further inquiries or assistance regarding your
            order, please don't hesitate to contact our customer support team.
            We are here to help! Thank you for choosing Madrasda.com. We
            appreciate your business and look forward to serving you again in
            the future. Sincerely, Madrasda.com
          </div>
        </main>
      </ClientLayout>
    </>
  );
}
