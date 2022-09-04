import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: { id: 201900810, token: "" },
});
