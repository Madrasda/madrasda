import ClientLayout from "@/components/layout-client";
import Head from "next/head";

export default function ReturnRefund() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda</title>
      </Head>
      <ClientLayout>
        <main className='p-8 md:pt-20 w-full md:w-1/2 mx-auto'>
          <div className='font-quest text-base text-black flex flex-wrap justify-start items-center text-justify px-3 py-8 w-full'>
            <p className='text-3xl font-bold text-left'>
              Privacy Policy for madrasda.com (Creator's Marketplace)
            </p>
            <br />
            At madrasda.com, we value and respect the privacy of our users. This
            Privacy Policy outlines the information we collect, how we use it,
            and how we protect your personal data when you use our platform. By
            using madrasda.com, you consent to the practices described in this
            policy.
            <br />
            <br />
            <i>Information Collection: </i>
            Personal Information: We may collect personal information such as
            your name, email address, contact information, and payment details
            when you register or use our platform. User Content: As a creators
            marketplace, we collect and store the content you create, including
            but not limited to artwork, designs, and descriptions. Usage Data:
            We collect information about your interactions and usage of our
            platform, including IP addresses, device information, and browsing
            activity.
            <br />
            <br />
            <i>Use of Information:</i>
            Provide Services: We use the collected information to provide,
            improve, and personalize our platform's services, including
            facilitating transactions and communication between creators and
            buyers.
            <br />
            <br />
            <i>Communication: </i>
            We may use your contact information to communicate with you about
            your account, transactions, and platform updates. We may also send
            promotional emails and updates about new features or relevant
            information. Analytics: We use data for analytics purposes to
            understand and improve our platform's performance, user experience,
            and to make informed business decisions. Legal Compliance: We may
            use and disclose information as required by law, regulations, legal
            processes, or to enforce our Terms of Service and protect our rights
            and the rights of others.
            <br />
            <br />
            <i>Data Sharing: </i>
            Third-Party Service Providers: We may share your information with
            trusted third-party service providers who assist us in operating our
            platform, processing payments, or providing other necessary
            services. These providers have limited access to your data and are
            obligated to protect it. Collaborations and Public Sharing: As a
            creators marketplace, some of your information, such as your public
            profile, artwork, and designs, may be shared with other users and
            the general public according to your settings and preferences.
            <br />
            <br />
            <i>Data Security: </i>
            We employ industry-standard security measures to protect your
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet or
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
            <br />
            <br />
            <i>Data Retention:</i>
            We retain your personal information as long as necessary to provide
            our services, comply with legal obligations, resolve disputes, and
            enforce our agreements.
            <br />
            <br />
            <i>Your Rights: </i>
            You have the right to access, update, correct, or delete your
            personal information. You can manage your account settings and
            preferences through the platform or contact us for assistance. You
            have the right to opt-out of receiving promotional communications
            from us.
            <br />
            <br />
            <i>Children's Privacy: </i>
            Our platform is not intended for use by individuals under the age of
            13. We do not knowingly collect or store personal information from
            children without parental consent.
            <br />
            <br />
            <i>Changes to the Privacy Policy: </i>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting a prominent notice on our
            website or sending you a direct communication. If you have any
            questions or concerns about this Privacy Policy, please contact us
            at [contact email]. Your privacy is important to us, and we are
            committed to addressing any inquiries or issues promptly and
            transparently.
            <br />
            <br />
            <br />
            Thank you <br />
            Team Madras Da
          </div>
        </main>
      </ClientLayout>
    </>
  );
}
