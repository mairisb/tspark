import { CardDto } from '@tspark/common';
import { axiosInstance } from '../../core/api/axios.instance';

const getAll = (): Promise<CardDto[]> => {
  return axiosInstance
    .get('card')
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

const create = (card: CardDto): Promise<void> => {
  return axiosInstance
    .post('card', card)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    });
};

export const cardService = {
  getAll,
  create,
};
