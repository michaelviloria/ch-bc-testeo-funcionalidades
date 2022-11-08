import { logger, loggerApis } from "../utils/apiLogs.js";
import Product from "../models/Products.js";

class ProductsDao {
	async addProduct(product) {
		try {
			await Product.create(product, (error) => {
				if (error) loggerApis.error("Error agregando un nuevo producto", error);
				logger.info("Producto agregado");
			});
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async getAll() {
		try {
			return await Product.find({});
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async get(id) {
		try {
			await Product.findOne({ id }, (error, id) => {
				if (error || !id) return {};
				return id;
			});
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async update(id, product) {
		try {
			return await Product.findOneAndReplace({ id }, product);
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}

	async delete(id) {
		try {
			return await Product.findOneAndDelete({ id });
		} catch (error) {
			logger.info("*** Error ***", error);
		}
	}
}

export default ProductsDao;
