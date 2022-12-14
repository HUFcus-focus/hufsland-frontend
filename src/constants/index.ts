export const TOKEN = "token";

export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
} as const;

export const PATH = Object.freeze({
  HOME: "/",
  KAKAO: "/auth/kakao/*",
  INFO: "/info",
  ALL: "*",
});

export const URL = Object.freeze({
  BASE: import.meta.env.VITE_BASE_URL,
  KAKAO_AUTH: `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`,
});

export const ERROR = Object.freeze({
  KAKAO_CODE: "카카오 인가코드가 유효하지 않습니다.",
  API: "API 서버와의 통신에 실패했습니다.",
  INFO: "종합정보시스템 연동에 실패했습니다.",
  TOKEN: "엑세스 토큰 인증에 실패했습니다.",
});
