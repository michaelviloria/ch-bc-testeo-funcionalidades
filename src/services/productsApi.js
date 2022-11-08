import ProductsDao from "../DAO/products.js";
import { logger } from "../utils/apiLogs.js";

class ProductsApi {
	constructor() {
		this.productsDao = new ProductsDao();
	}

	async getAll() {
		try {
			const response = await this.productsDao.getAll();
			return response;
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async get(id) {
		try {
			logger.info("*** ID API ***", id);
			logger.info("*** ID API ***", Number(id));
			const response = await this.productsDao.get(id);
			return response;
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async addProduct(product) {
		try {
			await this.productsDao.addProduct(product);
			logger.info("Producto guardado.");
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async update(id, product) {
		try {
			const response = await this.productsDao.update(id, product);
			return response;
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async delete(id) {
		try {
			const response = await this.productsDao.delete(id);
			return response;
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}
}

export default ProductsApi;
