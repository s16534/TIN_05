const todoController = require('../controllers/todoController');
const router = require('express').Router();

router.get("/", todoController.index);
router.post("/", todoController.new);
router.post("/:id/completedTask", todoController.completedTask);
router.post("/:id/uncompletedTask", todoController.uncompletedTask);
router.post("/:id/delete", todoController.delete);
router.get("/deleteCompletedTasks", todoController.deleteCompletedTasks);

module.exports = router;