import { Router } from "express";
import ControllersProducts from "../controllers/products.js";

const router = Router();

class RouterProducts {
	constructor() {
		this.controllersProducts = ControllersProducts.getInstance();
	}

	start() {
		router.get("/", this.controllersProducts.get);
		router.post("/add", this.controllersProducts.addProduct);
		router.put("/update", this.controllersProducts.update);
		router.delete("/remove", this.controllersProducts.delete);

		return router;
	}
}

export default RouterProducts;
