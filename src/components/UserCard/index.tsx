import React from 'react';
import Card from '../Card';
import { IUser, isEmployee, isManager } from '../../types/User.types';

interface Props<T> {
  /** The user to display in the card */
  user: T;
}

interface Props<T> {
  /** The user to display in the card */
  user: T;
}

/**
 * Card component
 * @param props The props for the card
 * @param props.user The user to display in the card
 * @returns The card component
 */
const UserCard = <T extends IUser>({ user }: Props<T>): React.ReactElement => {
  const headerText = isManager(user)
    ? 'Manager'
    : isEmployee(user)
    ? 'Employee'
    : 'User';

  return (
    <Card>
      <h5>{headerText}</h5>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Card>
  );
};

export default UserCard;
