let express = require("express");
let router = express.Router();

let client_controller = require("../controllers/clientController");

// GET catalog home page.
router.get("/", client_controller.index);

//CLIENT ROUTES
router.post("/client/create", client_controller.client_create_post);
router.get("/clients", client_controller.clients_list);
router.put("/:_id", client_controller.client_put);
router.get("/:_id", client_controller.car_list_of_a_client);

module.exports = router;
