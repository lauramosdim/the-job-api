/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/jobs              ->  index
 * POST    /api/jobs              ->  create
 * GET     /api/jobs/:id          ->  show
 * PUT     /api/jobs/:id          ->  update
 * DELETE  /api/jobs/:id          ->  destroy
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */


/**
 * Get list of job
 */
async function index(_, res) {

}

/**
 * Creates a new job
 */
async function create(req, res) {

}

/**
 * Get a single job
 */
async function show(req, res) {
  const { id: jobId } = req.params


}

/**
 * Deletes a job
 */
async function destroy(req, res) {
  const { id: jobId } = req.params

}

/**
 * Updates a job
 */
async function update(req, res) {
  const { id: jobId } = req.params

}



module.exports = {
  create,
  destroy,
  index,
  show,
  update,
}
