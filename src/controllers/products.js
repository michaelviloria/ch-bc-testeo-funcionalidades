import ProductsApi from "../services/productsApi.js";
import { logApp } from "../utils/apiLogs.js";

class ControllersProducts {
	constructor() {
		this.api = ProductsApi.getInstance();
		this.instance = null;
	}

	static getInstance = () => {
		if (!this.instance) this.instance = new ControllersProducts();
		return this.instance;
	};

	getAll = async () => {
		try {
			const response = await this.api.getAll();
			return response;
		} catch (error) {
			logApp.info("*** Error ***", error);
		}
	};

	get = async (req, res) => {
		try {
			const { id } = req.query;
			if (!id) {
				res.json(await this.getAll());
			} else {
				const response = await this.api.get(Number(id));
				res.json({ response });
			}
		} catch (error) {
			logApp.info("*** Error ***", error);
		}
	};

	addProduct = async (req, res) => {
		try {
			const product = req.body;
			if (!product) res.json({ message: "Producto no añadido" }).status(400);

			const response = await this.api.addProduct(product);
			res.json({ response }).status(200);
		} catch (error) {
			logApp.info("*** Error ***", error);
		}
	};

	update = async (req, res) => {
		try {
			const { id } = req.query;
			const product = req.body;
			if (!product || !id)
				res.json({ message: "Porducto o id, no han sido especificados" });

			const response = await this.api.update(Number(id), product);
			logApp.info(response);
			res.json({ response });
		} catch (error) {
			logApp.info("*** Error ***", error);
		}
	};

	delete = async (req, res) => {
		try {
			const { id } = req.query;
			if (!id) res.json({});

			const response = await this.api.delete(id);
			logApp.info(response);
			res.json({ response });
		} catch (error) {
			logApp.info("*** Error ***", error);
		}
	};
}

export default ControllersProducts;
