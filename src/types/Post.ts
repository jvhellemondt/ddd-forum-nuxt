import type { Vote } from './Vote'
import type { Comment } from './Comment'

export interface Post {
  id: number
  member_id: number
  post_type: string
  title: string
  content: string
  votes: Vote[]
  member_posted_by: MemberPostedBy
  comments: Comment[]
  created_at: string
  updated_at: string
}
