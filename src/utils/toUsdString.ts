/**
 * Converts a number to a string in USD format.
 * @param value The value to convert
 * @returns The value as a string in USD format
 */
const toUsdString = (value: number): string => `$${value.toFixed(2)}`;

export default toUsdString;
