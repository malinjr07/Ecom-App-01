import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import { useRouter } from "next/router";
import { registerContent } from "@/static/contents/login";
import useTranslator from "@/utils/useTranslator";
import AuthTextField from "../base/AuthTextField";

const Register: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", registerContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.title}
      subTitle={content?.subTitle}
      btnText={content?.btnText}
      loginUrl={content?.loginUrl}
      textBelowBtn={content?.textBelowBtn}
      loginText={content?.loginText}
    >
      <div className="mb-9 space-y-[18px]">
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="fullName"
          placeholder={content?.placeholder}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="fullName"
          placeholder={content?.placeholder2}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="phone"
          placeholder={content?.placeholder3}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="email"
          inputType="email"
          placeholder={content?.placeholder4}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          placeholder={content?.placeholder5}
        />
        <AuthTextField
          inputClass="!pl-[11px]"
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          placeholder={content?.placeholder6}
        />
      </div>
    </LoginSideBar>
  );
};

export default Register;
