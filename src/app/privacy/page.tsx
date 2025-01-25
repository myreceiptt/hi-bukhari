// External libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import {
  entityMonth,
  entityDate,
  entityYear,
  entityName,
  entityAlias1,
  entityAlias2,
  entityEmail,
} from "@/config/osloid";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 md:px-20 py-8">
      {/* Top Image */}
      <Image
        src="/bukhari-fa-login-04.png"
        alt="Bukhari Islamic Art Banner with Partners Logo."
        width={474}
        height={474}
        className="object-contain w-full max-w-max"
        priority
      />

      {/* Content Section */}
      <main className="w-full max-w-3xl space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Privacy Policy
          </h1>
          <h2 className="text-sm md:text-base lg:text-lg font-normal text-gray-600">
            Last updated on {entityMonth} {entityDate}, {entityYear}.
          </h2>
        </div>

        {/* Policy Overview */}
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            Overview
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            This website is operated by {entityName}. Throughout the
            application, the terms “we,” “us,” and “our” refer to {entityName},
            also referred to as {entityAlias1} and {entityAlias2}. {entityName}{" "}
            offers this application, including all information, tools, and
            services available from this application, to you, the user,
            conditioned upon your acceptance of all terms, conditions, policies,
            and notices stated here.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            By visiting our application, you engage in our “Service” and agree
            to be bound by this Privacy Policy.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Please read this Privacy Policy carefully before accessing or using
            our application. If you do not agree with this policy, do not use
            this application.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            You can review the most current version of this Privacy Policy at
            any time on this page. We reserve the right to update, change, or
            replace any part of this Privacy Policy by posting updates and/or
            changes to our application. It is your responsibility to check this
            page periodically for changes. Your continued use of or access to
            the application after we post any changes constitutes acceptance of
            those changes.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            PRIVACY POLICY
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            {entityName} promotes web3 technology through our application as
            well as through various third-party websites and platforms. We have
            adopted this Privacy Policy to guide you through the collection,
            use, retention, and disclosure of Personally Identifiable
            Information (“Personal Data,” as further described below) that you
            may provide while using the {entityName}
            application and services in connection with these platforms
            (collectively referred to as “Services”).
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            {entityName} encourages you to read this Privacy Policy, as well as
            our Terms and Conditions of Use, to understand how we collect and
            process Personal Data in the course of providing the Services and
            your interaction with the Services.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            By using the Services, you consent to the collection, use,
            retention, and disclosure of your Personal Data for processing as
            described in, and subject to the limitations set out in, this
            Privacy Policy.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Note to Residents of the European Union:
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            To comply with the requirements of the European General Data
            Protection Regulation (GDPR) for our European users, this Privacy
            Policy outlines the legal basis on which we process your Personal
            Data and provides other information required by the GDPR.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            PURPOSE
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Protecting your privacy is important to us. Personal Data is any
            information that would identify a person directly or indirectly, in
            combination with data from other sources. For example, a full name,
            home or work address, phone number, national identification number
            (SSN, SIN, etc.), email address, banking details, IP address,
            biometric data, usage data, or any information that may individually
            identify a person.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            {entityName} may collect Personal Data, including, without
            limitation, your name, email address, IP address, and device
            identifiers and/or geolocation information, in the course of its
            Services and may use or disclose that Personal Data as described in
            this Privacy Policy.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            We may also create de-identified or anonymized data from Personal
            Data by excluding data components (such as your name, email address,
            etc.) that make the data able to personally identify you, through
            obfuscation or other means. In addition, we may collect and use
            aggregated, anonymous information to provide data about the Services
            to advertisers, potential business partners, and other unaffiliated
            entities. As this information does not identify a person and is
            therefore not Personal Data, {entityName}, when using such
            aggregated, anonymized, and/or de-identified data, is not subject to
            this Privacy Policy.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            When you use our application, we may collect the personal
            information that you voluntarily provide, such as your name and
            email address. We may also automatically receive your computer’s
            Internet Protocol (IP) address to provide us with information that
            helps us learn about your browser and operating system. Your consent
            is implied for the collection and use of your data to facilitate
            your use of the application or to complete the transaction initiated
            by you.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Email Marketing (if applicable): If you have joined our mailing
            list, or if you email us, we may also send you emails about our new
            products and other updates. You can opt out of our email list by
            using the unsubscribe feature included in our emails.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 2 – CONSENT
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            How do you get my consent?
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If we ask for your personal information for a specific reason, such
            as for marketing purposes, we will either ask you directly for your
            expressed consent or provide you with an opportunity to decline.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            How do I withdraw my consent?
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If, after opting in, you change your mind, you may withdraw your
            consent for us to contact you or for the continued collection, use,
            or disclosure of your information at any time by contacting our
            Privacy Compliance Officer (see contact details at the end of this
            page).
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 3 – DISCLOSURE
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            We may disclose your personal information to government authorities
            if we are required by law to do so or if you violate our Terms and
            Conditions of Use.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 4 - THIRD-PARTY SERVICE
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            In general, the third-party providers used by us will only collect,
            use, and disclose your information to the extent necessary to allow
            them to perform the services they provide to us.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            However, certain third-party service providers, such as payment
            gateways and other payment transaction processors, have their own
            privacy policies concerning the information we are required to
            provide to them for your purchase-related transactions.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            For these providers, we recommend that you read their privacy
            policies so you can understand how your personal information will be
            handled by them.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            In particular, remember that certain providers may be located in, or
            have facilities located in, a different jurisdiction than either you
            or us. If you elect to proceed with a transaction that involves the
            services of a third-party service provider, your information may
            become subject to the laws of the jurisdiction(s) in which that
            service provider or its facilities are located.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            As an example, if you are located in Canada and your transaction is
            processed by a payment gateway located in the United States, your
            personal information used in completing that transaction may be
            subject to disclosure under United States legislation, including the
            Patriot Act.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Once you leave our application or are redirected to a third-party
            application, you are no longer governed by this Privacy Policy or
            our application&apos;s Terms and Conditions of Use. The following is
            a list of Data Processors engaged by {entityName} who may receive
            Personal Data:
          </p>
          <ol className="list-decimal list-outside space-y-2">
            <li className="text-sm md:text-base leading-relaxed">GitHub.com</li>
            <li className="text-sm md:text-base leading-relaxed">Vercel.com</li>
            <li className="text-sm md:text-base leading-relaxed">
              ThirdWeb.com
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              BaseScan.org
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Base Blockchain
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              PolygonScan.com
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Polygon Blockchain
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              EtherScan.io
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Ethereum Blockchain
            </li>
          </ol>
          <p className="text-sm md:text-base leading-relaxed">
            External Links:
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            When you click on links and/or hyperlinked buttons on our
            application, they may direct you away from our application. We are
            not responsible for the privacy practices of other applications and
            encourage you to read their privacy statements.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 5 – SECURITY
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            To protect your personal information, we take reasonable precautions
            and follow industry best practices to ensure it is not
            inappropriately lost, misused, accessed, disclosed, altered, or
            destroyed.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 6 – COOKIES
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            We may use cookies, and if/when we do, you can choose whether or not
            to opt out of cookies.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 7 - TRANSFER OF YOUR DATA TO OTHER COUNTRIES
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            The data that {entityName} processes, as well as data processed by
            associated services and providers, may be stored on servers located
            in the USA, Canada, Europe, and/or elsewhere. It may be stored in
            multiple locations. However, we ensure that regardless of where it
            is stored, your data is stored in a way that is consistent with the
            standards of protection required under applicable law.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Where Personal Data is transferred from the European Economic Area
            to a country that has not received an adequacy decision by the
            European Commission, {entityName} relies on appropriate safeguards,
            such as the European Commission-approved Standard Contractual
            Clauses and EU-U.S. Privacy Shield Frameworks, to transfer the
            Personal Data.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            By using our Services and submitting your Personal Data, you agree
            to the transfer, storage, and/or processing of your data in the
            locations contemplated above. Where and as required, we will seek
            your explicit consent as outlined in this Privacy Statement.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 8 - CHANGES TO THIS PRIVACY POLICY
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            We reserve the right to modify this Privacy Policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the application. If we make
            material changes to this policy, we will notify you here that it has
            been updated so that you are aware of what information we collect,
            how we use it, and under what circumstances, if any, we use and/or
            disclose it.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If our application or company is acquired or merged with another
            company, your information may be transferred to the new owners so
            that we may continue to sell products to you.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            SECTION 9 – RIGHTS CONCERNING PERSONAL DATA
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            {entityName} is committed to ensuring you retain full access to and
            control of your Personal Data. To that end, we endeavor to respect
            your right to be informed regarding the collection, use, and
            disclosure of Personal Data, as well as your right to correction and
            access to it, via this Privacy Statement.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If you would like to access, correct, remove, request a copy of,
            withdraw consent to the collection of your Personal Data, or are
            seeking additional information on how your Personal Data may be
            collected, used, or disclosed by {entityName}, please contact our
            Privacy Compliance Officer (see contact details at the end of this
            page). Subject to certain exceptions and limitations that may be
            prescribed by applicable law, you will be provided with reasonable
            access to your data and will be entitled to have it amended or
            corrected as appropriate.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            In certain circumstances, you may have the right to have your data,
            or certain components of your Personal Data, erased by {entityName},
            to have your data moved, copied, or transmitted from our systems to
            other systems, or to object to or restrict certain processing of
            your data by us. If you wish to inquire about or seek to exercise
            any of these rights (as they may apply), please contact our Privacy
            Compliance Officer at: {entityEmail}.
          </p>
        </section>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <Link href="/" className="w-full">
            <button
              type="button"
              className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1">
              &lArr; Go Back &lArr;
            </button>
          </Link>
        </div>
      </main>

      {/* Bottom Image */}
      <Image
        src="/bukhari-fa-login-06.png"
        alt="Bukhari Islamic Art Powered by VOYAGE."
        width={474}
        height={474}
        className="object-contain w-full max-w-max"
        priority
      />
    </div>
  );
}
