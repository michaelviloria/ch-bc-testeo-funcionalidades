import app from "./src/server.js";
import mongoose from "mongoose";
import { logger, loggerApis } from "./src/utils/apiLogs.js";
import config from "./config.js";
// import yargs from "yargs";
import * as dotenv from "dotenv";
dotenv.config();

// export const args = yargs(process.argv.slice(2))
// 	.options({
// 		p: {
// 			alias: "port",
// 			default: "8080",
// 			describe: "Puerto de escucha del servidor",
// 		},
// 		// m: {
// 		// 	alias: "mode",
// 		// 	default: "FORK",
// 		// 	describe: "Modo de operacion del servidor",
// 		// 	type: "string",
// 		// },
// 	})
// 	.parse();
// const portArgs = args.port || 8080;

const PORT = config.PORT || 8080;

const server = app.listen(PORT, () => {
	mongoose.connect(process.env.MONGO_CONNECT);
	logger.info(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => loggerApis.error(`Error en servidor: ${error}`));
