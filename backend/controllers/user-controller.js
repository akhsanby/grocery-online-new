import userService from "../services/user-service.js";

async function register(req, res) {
  try {
    const result = await userService.register(req.body);

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
    });
  }
}

async function login(req, res) {
  try {
    const result = await userService.login(req.body);

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
    });
  }
}

export default {
  register,
  login,
};
