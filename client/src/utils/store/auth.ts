import { create } from "zustand";

type LoginState = {
  email: string;
  password: string;
  successRegister: boolean;
};

type LoginAction = {
  setEmail: (email: LoginState["email"]) => void;
  setPassword: (password: LoginState["password"]) => void;
  reset: () => void;
  setSuccessRegister: () => void;
};

export const useLoginStore = create<LoginState & LoginAction>((set) => ({
  email: "",
  password: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  reset: () => set({ email: "", password: "" }),
  successRegister: false,
  setSuccessRegister: () => set({ successRegister: true }),
}));

type RegisterState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegisterAction = {
  setFullName: (fullName: RegisterState["fullName"]) => void;
  setEmail: (email: RegisterState["email"]) => void;
  setPassword: (password: RegisterState["password"]) => void;
  setConfirmPassword: (confirmPassword: RegisterState["confirmPassword"]) => void;
  reset: () => void;
};

export const useRegisterStore = create<RegisterState & RegisterAction>((set) => ({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  setFullName: (fullName) => set({ fullName }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  reset: () => set({ password: "", confirmPassword: "" }),
}));
