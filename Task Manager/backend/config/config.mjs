import bodyParser from "body-parser";
import cors from 'cors'
import morgan from "morgan";

const appConfig = (app) => {
  app.use(cors());

  app.use(bodyParser.json());
  app.use(morgan("dev"));
};

export { appConfig };
