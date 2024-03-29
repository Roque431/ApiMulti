
const controller = require("../controllers/product.controller")
const { verifyProduct } = require("../middlewares"); // Verifica la ruta de importación

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "http://127.0.0.1:5500"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
    );
    next();
  });

  // Ruta para crear un nuevo producto
  app.post(
    "/api/products",
    [
      verifyProduct.checkDuplicateCodigoOrNombre  // Aquí debes usar el nombre correcto de la función
    ],
    controller.createProduct // Controlador para crear un nuevo producto
  );

  // Otras rutas para productos si las tienes...
};
