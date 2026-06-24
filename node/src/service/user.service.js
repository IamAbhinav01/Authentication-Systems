const { StatusCodes } = require('http-status-codes');
const { loggerConfig } = require('../config');
const UserRepository = require('../repositories/user.repository');
const { customErrorHandler } = require('../utils/errors');
const userRepo = new UserRepository();

const createUser = async (request) => {
  try {
    const userData = await userRepo.create(request);
    if (!userData) {
      loggerConfig.error('Error while registering user to database');
      throw new customErrorHandler(
        'Error while registering user to database',
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    loggerConfig.info('successfully user and stored in database');
    return userData;
  } catch (error) {
    if (error instanceof customErrorHandler) {
      throw error;
    }
    loggerConfig.error('Error while sending data from service');
    throw new customErrorHandler(
      'Error occured sending data',
      StatusCodes.BAD_REQUEST
    );
  }
};
module.exports = {
  createUser,
};
