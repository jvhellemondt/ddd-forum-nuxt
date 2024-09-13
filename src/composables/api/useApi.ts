import { snakeCase, camelCase } from 'lodash-es';
import type { RegistrationInput } from '../../types/auth/register/RegistrationInput'

const transformToSnakeCase = <T>(input: T): T => {
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

const transformToCamelCase = <T>(input: T): T => {
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

export const useApi = () => {
  return {
    posts: {
      async getPosts(): Post[] {
        const listPostsEndpoint = `api/posts?sort=recent`;
        const response = await $fetch(listPostsEndpoint)
        return response.data.map(transformToCamelCase<object>)
      }
    },
    async register(input: RegistrationInput) { 
      const registerEndpoint = `api/users/create`;
      const body = transformToSnakeCase<object>(input)
      return await $fetch(registerEndpoint, {
        method: 'POST',
        body,
      })
    }
  };
};
