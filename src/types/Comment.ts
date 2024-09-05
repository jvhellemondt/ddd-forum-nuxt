export interface Comment {
  id: number
  post_id: number
  text: string
  member_id: number
  parent_comment_id: number | null
  created_at: string
  updated_at: string
}
