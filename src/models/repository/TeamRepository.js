const Team = require('../entity/Team')

class TeamRepository {
  async create (team) {
    return Team.create(team)
  }
}

module.exports = new TeamRepository()
