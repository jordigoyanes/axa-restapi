import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes/index';
import * as dotenv from 'dotenv';
import * as swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerui from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';
import auth from './middleware/auth';

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(auth)
app.use("/api", router)

let swaggerDocument = YAML.load(path.resolve(__dirname, '../swagger.yaml'));
swaggerDocument.host = "localhost:" + port
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));

app.listen(port, () => {
    console.log("Server listening at http://localhost:" + port)
    console.log("API documentation at http://localhost:" + port + "/api-docs")

})