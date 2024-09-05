<template>
  <div class="flex flex-col">
    <template v-for="post in posts" :key="post.title">
      <div class="flex flex-row">
        <div class="mr-4 flex flex-col justify-center">
          <div>
            <NuxtImg src="/arrow.svg" alt="Arrow-Up" />
          </div>
          <div class="font-bold">{{ computeVoteCount(post.votes) }}</div>
          <div class="rotate-180">
            <NuxtImg src="/arrow.svg" alt="Arrow-Up" />
          </div>
        </div>
        <div>
          <div class="font-bold text-lg">{{ post.title }}</div>
          <div class="flex flex-row items-center gap-2">
            <div v-if="post.createdAt">{{ timeAgo(post.createdAt) }}</div>
            <span>|</span>
            <NuxtLink 
              :to="`/member/${post.memberPostedBy.user.username}`"
              class="text-blue-6  hover:text-blue-8"
            >
              by {{ post.memberPostedBy.user.username }}
            </NuxtLink>
            <span>|</span>
            <div class="flex gap-2">
              <span>{{ post.comments.length }}</span>
              <span>{{ t('comment', post.comments.length) }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import type { Post } from '~/types/Post'
import type { Vote } from '~/types/Vote'

const { t } = useI18n({
  useScope: 'local'
})

defineProps<{
  posts: Post[]
}>()

const computeVoteCount = (votes: Vote[]) => {
  let count = 0
  votes.forEach(v => (v.voteType === 'Upvote' ? count++ : count--))
  return count
}

const timeAgo = (dateCreated: string) => formatDistanceToNow(new Date(dateCreated), { addSuffix: true });
</script>

<i18n lang="json">{
  "en": {
    "comment": "comment | comments"
  }
}
</i18n>
