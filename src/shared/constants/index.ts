export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
} as const;

export const URL = Object.freeze({
  BASE: "http://localhost:8000",
  KAKAO_AUTH: `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`,
});

export const MESSAGE = Object.freeze({
  ALERT_API: "에러가 발생했습니다.",
});
