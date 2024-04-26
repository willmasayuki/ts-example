import { IItem } from './Generic.types';

export interface IUser extends IItem {
  /** The email of the user */
  email: string;
}

export interface IEmployee extends IUser {
  /** The department of the employee */
  department: string;
}

export interface IManager extends IEmployee {
  /** The team size of the manager */
  teamSize: number;
}

/**
 * Check if the user is an employee
 * @param user The user to check
 * @returns True if the user is an employee, false otherwise
 */
export const isEmployee = (user: IUser): user is IEmployee => {
  return (user as IEmployee).department !== undefined;
};

/**
 * Check if the user is a manager
 * @param user The user to check
 * @returns True if the user is a manager, false otherwise
 */
export const isManager = (user: IUser): user is IManager => {
  return (user as IManager).teamSize !== undefined;
};
