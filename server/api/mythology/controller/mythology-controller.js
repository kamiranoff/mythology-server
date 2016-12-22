import MythologyDAO from '../dao/mythology-dao';

export default class MythologyController {
  static getAll(req, res) {
    MythologyDAO
      .getAll()
      .then(greeks => res.status(200).json(greeks))
      .catch(error => res.status(400).json(error));
  }
}
