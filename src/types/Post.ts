import type { Vote } from './Vote'
import type { Comment } from './Comment'

export type Post = {
  title: string
  dateCreated: string
  memberPostedBy: object
  comments: Comment[]
  votes: Vote[]
}
