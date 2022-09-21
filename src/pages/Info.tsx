import { SubmitHandler, useForm } from "react-hook-form";

import { infoApi } from "@/api";
import { TOKEN } from "@/constants";
import { Inputs } from "@/types";

const Info = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        const res = await infoApi.linkUserInfo({ ...data, token });
        console.log(res);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='학번' {...register("id", { required: true })} />
      {errors.id && <span>학번을 입력해주세요</span>}
      <input placeholder='비밀번호' {...register("pw", { required: true })} />
      {errors.pw && <span>비밀번호를 입력해주세요</span>}
      <button type='submit'>연동하기</button>
    </form>
  );
};

export default Info;
