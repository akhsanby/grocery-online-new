import prismaClient from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { registerValidation, loginValidation } from "../validation/user-validation.js";
import validate from "../validation/validate.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function register(request) {
  const registerRequest = validate(registerValidation, request);

  const isCustomerExist = await prismaClient.user.findFirst({
    where: {
      email: registerRequest.email,
    },
  });

  if (isCustomerExist) throw new ResponseError(400, "Email already registered, try other");

  // do password hash with bcrypt
  registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

  const newCustomer = await prismaClient.user.create({
    data: {
      full_name: registerRequest.full_name,
      email: registerRequest.email,
      password: registerRequest.password,
    },
    select: {
      full_name: true,
      email: true,
      role: true,
    },
  });

  return newCustomer;
}

async function login(request) {
  const loginRequest = validate(loginValidation, request);

  const customer = await prismaClient.user.findFirst({
    where: {
      email: loginRequest.email,
    },
  });

  // if user not found
  if (!customer) throw new ResponseError(401, "Email or password wrong");

  // do password compare with bcrypt
  const isPasswordValid = await bcrypt.compare(loginRequest.password, customer.password);

  if (!isPasswordValid) throw new ResponseError(401, "Email or password wrong");

  return await prismaClient.user.update({
    data: {
      token: uuid(),
    },
    where: {
      email: customer.email,
    },
    select: {
      token: true,
    },
  });
}

async function get(token) {
  const user = await prismaClient.user.findFirst({
    where: {
      token,
    },
    select: {
      id: true,
      full_name: true,
      email: true,
      role: true,
      address: true,
      phone_number: true,
    },
  });

  if (!user) throw new ResponseError(404, "User is not found");

  return user;
}

export default {
  register,
  login,
  get,
};
