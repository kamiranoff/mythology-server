import MythologyDAO from '../dao/mythology-dao';

export default class MythologyController {
  static getAll(req, res) {
    if(req.query.search){
      MythologyDAO
        .getFilteredList(req.query.search)
        .then(greeks => res.status(200).json(greeks))
        .catch(error => res.status(400).json(error));
    } else {
    MythologyDAO
      .getAll()
      .then(greeks => res.status(200).json(greeks))
      .catch(error => res.status(400).json(error));
  }
  }
};
