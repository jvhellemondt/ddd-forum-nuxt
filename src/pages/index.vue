<template>
  <PostsList :posts="posts" />
</template>

<script setup lang="ts">
import type { Post } from '~/types/Post'

const title = ref('Home')
useHeadSafe({ title })

const posts: Post[] = [
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
</script>
