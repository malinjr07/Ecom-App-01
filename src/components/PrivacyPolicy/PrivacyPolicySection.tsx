import { privacyPolicyContent } from "@/static/contents/privacyPolicy";
import useTranslator from "@/utils/useTranslator";
import { useRouter } from "next/router";
import React from "react";

const PrivacyPolicySection = () => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", privacyPolicyContent);
  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">{content?.title}</h1>
          <p className="text-gray-400">{content?.lastUpdate}</p>
        </div>
        <div className="mt-8">
          <p>{content?.details}</p>
          <h2 className="my-7 mb-2 font-semibold text-xl">
            {content?.subTitle}
          </h2>
          <p>{content?.details2}</p>
          <p className="mt-2">{content?.details3}</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
