import ProductsApi from "../services/productsApi.js";
import { logger } from "../utils/apiLogs.js";

class ControllersProducts {
	constructor() {
		this.api = new ProductsApi();
	}

	getAll = async () => {
		try {
			const response = await this.api.getAll();
			return response;
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	};

	get = async (req, res) => {
		try {
			const { id } = req.query;
			if (!id) {
				res.json(await this.getAll());
			} else {
				logger.info("*** ID Controllers ***", id);
				logger.info("*** ID Controllers ***", Number(id));
				const response = await this.api.get(Number(id));
				res.json({ response });
			}
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	};

	addProduct = async (req, res) => {
		try {
			const product = req.body;
			logger.info(product);
			if (!product) res.json({ message: "Producto no añadido" });

			const response = await this.api.addProduct(product);
			logger.info(response);
			res.json({ product });
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	};

	update = async (req, res) => {
		try {
			const { product, id } = req.query;
			if (!product || !id) res.json({});

			const response = await this.api.update(id, product);
			logger.info(response);
			res.json({ response });
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	};

	delete = async (req, res) => {
		try {
			const { id } = req.query;
			if (!id) res.json({});

			const response = await this.api.delete(id);
			logger.info(response);
			res.json({ response });
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	};
}

export default ControllersProducts;
