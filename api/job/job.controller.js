/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/jobs              ->  index
 * POST    /api/jobs              ->  create
 * GET     /api/jobs/:id          ->  show
 * PUT     /api/jobs/:id          ->  update
 * DELETE  /api/jobs/:id          ->  destroy
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const Job = require('./job.model')

/**
 * Get list of job
 */
async function index(_, res) {
  try {
    const jobs = await Job.find({}).sort({ createAt: -1 }).exec()
    res.status(200).json(jobs)

  } catch (error) {
    res.status(500).send(error)

  }

}

/**
 * Creates a new job
 */
async function create(req, res) {
  const job = req.body
  try {
    const newJob = new Job(job)
    await newJob.save()
    res.status(201).json(newJob)
  } catch (error) {
    res.status(500).send(error)
  }

}

/**
 * Get a single job
 */
async function show(req, res) {
  const { id: jobId } = req.params
  try {
    const data = await Job.findById(jobId).exec()
    if (!data) {
      return res.status(404).json(data)
    }
    const job = JSON.parce(JSON.stringify(data))
    res.status(200).json({ ...job, ago: data.timeAgo })

  } catch (error) {
    console.log(error)
    res.status(500).send(error)

  }


}

/**
 * Deletes a job
 */
async function destroy(req, res) {
  const { id: jobId } = req.params
  try {
    const job = await Job.findByIdAndDelete(jobId).exec()
    if (!data) {
      return res.status(404).json(data)
    }
    res.status(200).json(job)
  } catch (error) {
    res.status(500).send(error)
  }

}

/**
 * Updates a job
 */
async function update(req, res) {
  const { id: jobId } = req.params
  try {
    if (!data) {
      return res.status(404).json(data)
    }
    const updatedData = await Job.findByIdAndUpdate({ _id: jobId }, req.body, { new: true, }).exec()
    res.status(201).json(updatedData)
  } catch (error) {
    res.status(500).send(error)
  }

}



module.exports = {
  create,
  destroy,
  index,
  show,
  update,
}
