import { Response } from 'express';

export const response = (res: Response, data: any) => {
  res.status(data.code).json(data);
};
