export interface Vote {
  id: number
  post_id: number
  member_id: number
  vote_type: 'Upvote' | 'Downvote'
  created_at: string
  updated_at: string
}
