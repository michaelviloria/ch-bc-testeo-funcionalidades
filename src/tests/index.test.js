import supertest from "supertest";
const request = supertest("http://localhost:8080/api/products");
import { expect } from "chai";
import { logger } from "../utils/apiLogs.js";

describe("test api productos", () => {
	describe("GET", () => {
		it("Deberia retornar un status 200", async () => {
			const response = await request.get("/");

			expect(response.status).to.eql(200);
		});
	});

	describe("POST", () => {
		it("Debería incorporar un nuevo producto", async () => {
			const product = {
				name: "TV",
				price: 2300,
				stock: 14,
			};

			const response = await request.post("/add").send(product);
			expect(response.status).to.eql(200);

			const shippedProduct = response.body;
			logger.info(response.body);
			// expect(shippedProduct).to.include.keys("name", "price", "stock");
			expect(shippedProduct.name).to.eql(product.name);
			expect(shippedProduct.price).to.eql(product.price);
		});
	});
});
