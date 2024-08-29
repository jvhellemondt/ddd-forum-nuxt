import type { RegistrationInput } from '../../types/auth/register/RegistrationInput'

export const useApi = () => {
  return {
    posts: {
      getPosts: (): Post[] => {
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
    register: async (input: RegistrationInput) => {
      return Promise.resolve(input)
    }
  }

  // const { data, status, error, refresh, clear } = await useFetch('/api/auth/login')
};
