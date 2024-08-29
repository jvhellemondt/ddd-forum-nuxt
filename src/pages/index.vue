<template>
  <PostsList :posts="posts" />
</template>

<script setup lang="ts">
import type { Post } from '~/types/Post'

const title = ref('Home')
useHeadSafe({ title })

const api = useApi();
const posts: Post[] = await api.posts.getPosts()
</script>
