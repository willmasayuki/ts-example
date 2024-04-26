import { IItem } from './Generic.types';

export enum ProduceEnum {
  FRUIT = 'fruit',
  VEGETABLE = 'vegetable',
}

export interface IProduct extends IItem {
  /** The ID of the product */
  id: number;
  /** The name of the product */
  name: string;
  /** The price of the product */
  price: number;
  /** The description of the product */
  description: string;
}

export interface IProduce extends IProduct {
  /** The type of the produce */
  type: ProduceEnum;
  /** The weight of the produce in lbs */
  weight: number;
}

export interface IElectronic extends IProduct {
  /** The brand of the electronic */
  brand: string;
  /** The model of the electronic */
  model: string;
}

/**
 * Check if the product is produce
 * @param product The product to check
 * @returns True if the product is produce, false otherwise
 */
export const isProduce = (product: IProduct): product is IProduce => {
  return (product as IProduce).type !== undefined;
};

/**
 * Check if the product is electronic
 * @param product The product to check
 * @returns True if the product is electronic, false otherwise
 */
export const isElectronic = (product: IProduct): product is IElectronic => {
  return (product as IElectronic).brand !== undefined;
};
