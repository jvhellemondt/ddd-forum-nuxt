import { snakeCase } from 'lodash-es';

export const transformToSnakeCase = <T>(input: T): T => {
  if (Array.isArray(input)) {
    return input.map(item => transformToSnakeCase(item));
  }
  else if (input !== null && typeof input === 'object') {
    return Object.fromEntries(
      Object.entries(input).map(
        ([key, value]) => [snakeCase(key), transformToSnakeCase(value)]
      )
    );
  }
  return input;
};
