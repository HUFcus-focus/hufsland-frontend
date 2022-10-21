import styled from "styled-components";

import { SharedLayout } from "@/components/common";
import { InfoForm } from "@/components/info";

const Info = () => {
  return (
    <SharedLayout>
      <Text mt='50' size='24'>
        <span style={{ fontWeight: "bold" }}>종합정보시스템</span>을
        <br /> 연결해주세요.
      </Text>
      <InfoForm />
      <Text mt='20' size='15'>
        계정을 잊으셨나요?{" "}
        <a href='https://wis.hufs.ac.kr/src08/jsp/index.jsp'>
          <span style={{ fontWeight: "bold" }}>종정시 바로가기</span>
        </a>
      </Text>
    </SharedLayout>
  );
};

export default Info;

const Text = styled.div`
  color: ${({ theme }) => theme.color.blue};
  font-family: "Noto Sans KR";
  line-height: 35px;
  margin-top: ${(props: any) => props.mt}px;
  font-size: ${(props: any) => props.size}px;
` as any;
