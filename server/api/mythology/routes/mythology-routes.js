import MythologyController from '../controller/mythology-controller';

/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 * definitions:
 *   Figure:
 *     properties:
 *       _id:
 *         type: string
 *       name:
 *         type: string
 *       greekName:
 *         type: string
 *       description:
 *         type: string
 *       romanName:
 *         type: string
 *       category:
 *         type: string
 *       immortal:
 *         type: string
 *       gender:
 *         type: string
 *       events:
 *         type: array
 *         items:
 *           type: string
 *       books:
 *         type: array
 *         items:
 *           type: string
 *       relatives:
 *         properties:
 *           father:
 *             type: string
 *           mother:
 *             type: string
 *           children:
 *             type: array
 *             items:
 *               type: string
 *           lovers:
 *             type: array
 *             items:
 *               type: string
 *           spouses:
 *             type: array
 *             items:
 *               type: string
 *           image:
 *             type: object
 *             properties:
 *               thumbnail:
 *                 type: string
 *               regular:
 *                 type: string
 *
 *   Book:
 *     properties:
 *       _id:
 *         type: string
 *       name:
 *         type: string
 *       author:
 *         type: string
 *       translator:
 *         type: array
 *         items:
 *           type: string
 *       description:
 *         type: string
 *       rating:
 *         type: number
 *       link:
 *         type: string
 *       fulltext:
 *         type: string
 *       images:
 *         type: object
 *         properties:
 *           thumbnail:
 *             type: string
 *           regular:
 *             type: string
 *
 *   Quote:
 *     properties:
 *       _id:
 *         type: string
 *       quote:
 *         type: string
 *       author:
 *         type: string
 *       book:
 *         type: string
 *       rating:
 *         type: number
 *
 */

export default class MythologyRoutes {
  static init(router) {


    /**
     * @swagger
     * /api/figures:
     *   get:
     *     tags:
     *       - Greek Mythological Figures
     *     description: get all mythological figures or pass a name as parameter a filtered list
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: search
     *         in: query
     *         description: "Optional name to search through list"
     *         type: string
     *     responses:
     *       200:
     *         description: list of all mythological figures
     *         schema:
     *           $ref: '#/definitions/Figure'
     */
    router
      .route('/api/figures')
      .get(MythologyController.getFigures);


    /**
     * @swagger
     * /api/books:
     *   get:
     *     tags:
     *       - Greek Mythological Books
     *     description: get mythological books
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: list of all mythological books
     *         schema:
     *           $ref: '#/definitions/Book'
     */
    router
      .route('/api/books')
      .get(MythologyController.getBooks);

    /**
     * @swagger
     * /api/quotes/:
     *   get:
     *     tags:
     *       - Greek mythological Quotes
     *     description: get mythological quotes
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: random
     *         in: query
     *         description: "Optional param to randomize list order"
     *         type: boolean
     *     responses:
     *       200:
     *         description: list of all mythological quotes
     *         schema:
     *           $ref: '#/definitions/Quote'
     */
    router
      .route('/api/quotes')
      .get(MythologyController.getQuotes);


    router
      .route('/api/quotes/random')
      .get(MythologyController.getRandomQuote);
  }
}
