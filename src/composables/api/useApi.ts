import { snakeCase } from 'lodash-es';
import type { RegistrationInput } from '../../types/auth/register/RegistrationInput'

const transformToSnakeCaseBody = (input: object) => {
  return Object.fromEntries(
    Object.entries(input).map(
      ([key, value]) => [snakeCase(key), value]
    )
  )
}

export const useApi = () => {
  return {
    posts: {
      async getPosts(): Post[] {
        return [
          {
            title: 'My first post!',
            votes: [
              { id: 1, postId: 1, voteType: 'Upvote' },
              { id: 2, postId: 1, voteType: 'Downvote' },
              { id: 3, postId: 1, voteType: 'Upvote' },
              { id: 4, postId: 1, voteType: 'Upvote' },
            ],
            dateCreated: new Date("2024-08-25"),
            memberPostedBy: {
              user: {
                username: 'Khalil'
              }
            },
            comments: [],
          },
        ]
      }
    },
    async register(input: RegistrationInput) {
      const registerEndpoint = 'http://localhost:8080/users/create';
      const body = transformToSnakeCaseBody(input)
      return await $fetch(registerEndpoint, {
        method: 'POST',
        body,
      })
    }
  };
};
