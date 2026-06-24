const { StatusCodes } = require('http-status-codes');
const { loggerConfig } = require('../config');
const { customErrorHandler } = require('../utils/errors');

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      await this.model.create(data);
      LoggerConfig.info(
        `Successfully added data to the Database --> repository layer`
      );
    } catch (error) {
      loggerConfig.error('Error while creating data in repository layer(CRUD)');
      throw new customErrorHandler(
        'Error occured while creating data',
        StatusCodes.BAD_REQUEST
      );
    }
  }
}

module.exports = CrudRepository;
