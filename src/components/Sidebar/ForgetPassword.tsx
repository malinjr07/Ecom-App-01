import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import { forgetPasswordContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import AuthTextField from "../base/AuthTextField";

const ForgetPassword: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", forgetPasswordContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.title}
      subTitle={content?.subTitle}
      btnText={content?.btnText}
      codeSendBtn={content?.codeSendBtn}
    >
      <AuthTextField
        groupClass="mb-10"
        labelClass="!normal-case !pb-2.5"
        onChangeCb={() => {}}
        identifier="phoneNumber"
        placeholder={content?.placeholder}
        label={content?.label}
      />
    </LoginSideBar>
  );
};

export default ForgetPassword;
