import { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { RequestSchema } from "../interfaces/book.interface";

class ValidateRequest {
  static exe = (schema: RequestSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (schema.params) {
          req.params = await schema.params?.parseAsync(req.params);
        }

        if (schema.body) {
          req.body = await schema.body?.parseAsync(req.body);
        }

        if (schema.query) {
          req.query = await schema.query?.parseAsync(req.query);
        }

        next();
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(409).json(error);
        }
      }
      90;
    };
  };
}

export { ValidateRequest };
