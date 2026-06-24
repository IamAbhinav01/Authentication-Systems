const { CrudRepository } = require('.');
const { User_Details } = require('../models');

class UserRepository extends CrudRepository {
  constructor(User_Details) {
    super(User_Details);
  }
}
module.exports = UserRepository;
