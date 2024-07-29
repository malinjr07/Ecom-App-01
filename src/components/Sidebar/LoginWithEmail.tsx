import React, { FC } from "react";
import LoginSideBar from "../common/LoginSideBar";
import { commonSideBarProps } from "@/utils/type";
import TextField from "../base/TextField";
import { useRouter } from "next/router";
import useTranslator from "@/utils/useTranslator";
import { loginWithEmailContent } from "@/static/contents/login";
import AuthTextField from "../base/AuthTextField";

const LoginWithEmail: FC<commonSideBarProps> = ({ viewCart, actionCb }) => {
  const router = useRouter();
  let { locale } = router;
  const content: any = useTranslator(locale || "en", loginWithEmailContent);
  return (
    <LoginSideBar
      groupClass="md:w-[534px]"
      value={viewCart}
      setCart={actionCb}
      title={content?.title}
      subTitle={content?.subTitle}
      btnText={content?.btnText}
      loginWithText={content?.loginWithText}
      forgetPassUrl={content?.forgetPassUrl}
      textAboveBtn={content?.textAboveBtn}
      signUpUrl={content?.signUpUrl}
      signUpText={content?.signUpText}
    >
      <div className=" space-y-[18px]">
        <AuthTextField
          onChangeCb={() => {}}
          identifier="email"
          inputType="email"
          labelClass="!text-[16px]"
          label={content?.label}
          placeholder={content?.placeholder}
        />
        <AuthTextField
          onChangeCb={() => {}}
          identifier="password"
          inputType="password"
          placeholder={content?.placeholder2}
        />
      </div>
    </LoginSideBar>
  );
};

export default LoginWithEmail;
