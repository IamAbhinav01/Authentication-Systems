const { StatusCodes } = require('http-status-codes');
const { loggerConfig } = require('../config');
const {
  failedResponse,
  successResponse,
} = require('../utils/responseFormattwe');
const { UserService } = require('../service');

const userController = async (req, res) => {
  try {
    const email = req.body.email ? req.body.email.toString().trim() : '';
    const password = req.body.password ? req.body.password.toString() : '';
    const response = await UserService.createUser({
      email,
      password,
    });
    const userObject = response.toJSON();
    delete userObject.password;
    loggerConfig.info('Successfully recieved user Object from client');
    return res.status(StatusCodes.CREATED).json({
      ...successResponse,
      message: 'Successfully created a user object and send to database',
      data: userObject,
    });
  } catch (error) {
    loggerConfig.error(`Error while creating user: ${error.message}`);

    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        ...failedResponse,
        message: error.message || 'Something went wrong',
        error: error,
      });
  }
};

module.exports = {
  userController,
};
