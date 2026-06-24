const { StatusCodes } = require('http-status-codes');
const { loggerConfig } = require('../config');
const UserRepository = require('../repositories/user.repository');
const { customErrorHandler } = require('../utils/errors');
const userRepo = new UserRepository();

const createUser = async (request) => {
  try {
    const response = await userRepo.create(request);
    loggerConfig.info(
      'Sucessfully send response to database after logic validation'
    );
    return response;
  } catch (error) {
    loggerConfig.error('Error while sending data from service');
    throw new customErrorHandler(
      'Error occured sending  data',
      StatusCodes.BAD_REQUEST
    );
  }
};
module.exports = {
  createUser,
};
