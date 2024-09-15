import type { RegistrationInput } from '~/types/auth/register/RegistrationInput'
import { transformToCamelCase } from '~/utils/transformToCamelCase'
import { transformToSnakeCase } from '~/utils/transformToSnakeCase'

export const useApi = () => {
  return {
    posts: {
      async getPosts(): Post[] {
        return useFetch("api/posts?sort=recent", {
          key: 'api/posts?sort=recent',
          transform: transformToCamelCase,
          default: () => [],
          server: false
        })
      }
    },
    async register(input: RegistrationInput) {
      const body = transformToSnakeCase<object>(input)
      return $fetch("api/users/create", {
        method: 'POST',
        body,
        transform: transformToSnakeCase
      })
    }
  };
};
