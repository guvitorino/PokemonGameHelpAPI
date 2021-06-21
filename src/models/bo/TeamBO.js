const teamRepository = require('../repository/TeamRepository')

class TeamBO {
  async create (team) {
    return teamRepository.create(team)
  }
}

module.exports = new TeamBO()
