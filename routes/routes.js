let express = require("express");
let router = express.Router();
let client_controller = require("../controllers/clientController");
let car_controller = require("../controllers/carController");

// GET home page.
router.get("/", client_controller.index);

//CLIENT ROUTES
router.post("/client/create", client_controller.client_create_post);
router.get("/clients", client_controller.clients_list);
router.get("/client/:id/cars", client_controller.car_list_of_a_client);

//CAR ROUTES
router.post("/car/:id/create", car_controller.add_car_to_client);
router.put("/car/:id/update", car_controller.update_car); //agrega reparacion al modelo car
router.get("/car/:id", car_controller.get_repairs);
router.get("/cars/repair/order", car_controller.get_car_order);

module.exports = router;
