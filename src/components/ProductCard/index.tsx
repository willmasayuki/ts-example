import React from 'react';
import Card from '../Card';
import { IProduct, isElectronic, isProduce } from '../../types/Product.types';
import './styles.css';
import toUsdString from '../../utils/toUsdString';

const getBackgroundColor = (
  product: IProduct
): React.CSSProperties['color'] => {
  if (isProduce(product)) {
    return product.type === 'fruit' ? 'lightgreen' : 'lightblue';
  }

  if (isElectronic(product)) {
    return 'lightyellow';
  }
};

interface Props<T> {
  /** The product to display in the card */
  product: T;
}

/**
 * Card component
 * @param props The props for the card
 * @param props.produce The produce to display in the card
 * @returns The card component
 */
const ProductCard = <T extends IProduct>({
  product,
}: Props<T>): React.ReactElement => {
  const headerText = isProduce(product) ? 'Produce' : 'Electronic';

  return (
    <Card backgroundColor={getBackgroundColor(product)}>
      <h5>{headerText}</h5>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className='price'>{toUsdString(product.price)}</p>
    </Card>
  );
};

export default ProductCard;
