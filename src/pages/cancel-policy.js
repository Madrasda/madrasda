import ClientLayout from "@/components/layout-client";
import Head from "next/head";

export default function CancelPolicy() {
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
            <p className='text-3xl font-bold text-left'>Cancellation Policy</p>
            <br />
            At Madrasda.com, we understand that circumstances may arise where
            you need to cancel your order. We strive to provide flexibility and
            convenience to our customers. This Cancellation Policy outlines the
            guidelines and procedures for canceling an order. Cancellation
            Timeframe: We allow a cancellation window of 15 minutes from the
            time you place your order. You may cancel your order free of charge
            during this period. After the 15-minute timeframe has elapsed, the
            order will be processed, and cancellation may no longer be possible.
            Please note that our order processing time is typically 48 hours, so
            we recommend acting promptly if you wish to cancel your order.
            Requesting a Cancellation: To cancel your order within the permitted
            timeframe, please contact our customer support team immediately. You
            can reach out to us via email, phone, or live chat. Provide your
            order details, including the order number, to help us locate your
            order efficiently. Our customer support representatives will assist
            you in cancelling the order and provide any necessary instructions.
            Refunds for Cancelled Orders: If your order is successfully
            cancelled within the allowed timeframe, a refund will be issued to
            the original payment method used during the purchase process. Please
            note that it may take 3-5 business days for the refund to reflect in
            your account, depending on your financial institution's policies.
            Limitations and Exceptions: After the 15-minute cancellation window
            has passed, cancellations may not be possible as the order will
            likely have entered the processing stage. In such cases, we
            encourage you to refer to our return and exchange policy for
            information on how to initiate a return or exchange once you receive
            the product. Changes to Cancellation Policy: Madrasda.com reserves
            the right to modify or update this Cancellation Policy at any time
            without prior notice. Any changes will be effective immediately upon
            posting the revised policy on our website. We encourage you to
            review our policies periodically to stay informed of any updates. If
            you have any questions or require further assistance regarding the
            cancellation of your order, please don't hesitate to contact our
            customer support team. We are here to help you and ensure your
            satisfaction. Thank you for choosing Madrasda.com. We appreciate
            your understanding and cooperation. Sincerely, Madrasda.com
          </div>
        </main>
      </ClientLayout>
    </>
  );
}
