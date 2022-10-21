import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import { infoApi } from "@/api";
import { TOKEN } from "@/constants";
import { Inputs } from "@/types";

const InfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        const res = await infoApi.linkUserInfo({ ...inputs, token });
        console.log(res);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        mt='90'
        placeholder='학번'
        type='text'
        {...register("id", {
          required: true,
          pattern: /[^a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{9}/g,
          maxLength: 9,
        })}
      />
      {errors.id && <ErrorText>학번을 정확히 입력해주세요</ErrorText>}
      <Input
        mt='10'
        placeholder='비밀번호'
        type='password'
        {...register("pw", { required: true })}
      />
      {errors.pw && <ErrorText>비밀번호를 입력해주세요</ErrorText>}
      <Button type='submit'>연동하기</Button>
    </Form>
  );
};

export default InfoForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 3px solid ${({ theme }) => theme.color.skyBlue};
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 16px;
  border-radius: 20px;
  width: 245px;
  height: 20px;
  padding: 15px;
  margin-top: ${(props: any) => props.mt}px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.skyBlue};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.color.skyBlue};
  }
` as any;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 14px;
  width: 280px;
  height: 50px;
`;

const ErrorText = styled.div`
  color: tomato;
  font-size: 14px;
  margin-top: 4px;
`;
