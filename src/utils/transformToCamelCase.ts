import { camelCase } from 'lodash-es';

export const transformToCamelCase = <T>(input: T): T => {
  if (Array.isArray(input)) {
    return input.map(item => transformToCamelCase(item));
  }
  else if (input !== null && typeof input === 'object') {
    return Object.fromEntries(
      Object.entries(input).map(
        ([key, value]) => [camelCase(key), transformToCamelCase(value)]
      )
    );
  }
  return input;
};
