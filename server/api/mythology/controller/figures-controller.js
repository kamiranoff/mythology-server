import MythologyFiguresDAO from '../dao/figures-dao';

class FiguresController {
  static getFigures(req, res) {
    if (req.params.id) {
      MythologyFiguresDAO
        .getSingle(req.params.id)
        .then(figure => res.status(200).json(figure))
        .catch(error => res.status(400).json(error));
    } else if (req.query.search) {
      MythologyFiguresDAO
        .getFilteredList(req.query.search)
        .then(figures => res.status(200).json(figures))
        .catch(error => res.status(400).json(error));
    } else {
      MythologyFiguresDAO
        .getAll()
        .then(figures => res.status(200).json(figures))
        .catch(error => res.status(400).json(error));
    }
  }

  static patchFigure(req, res) {
    if (req.params.id) {
      MythologyFiguresDAO
        .patchFigure(req.params.id, req.body)
        .then(figure => res.status(200).json(figure))
        .catch(error => res.status(400).json(error));
    }
  }
}

export default FiguresController;
