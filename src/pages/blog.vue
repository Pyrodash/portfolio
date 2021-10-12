<template>
    <div class="blog">
        <div class="header">blog</div>
        <div class="posts">
            <template v-if="posts.length > 0">
                <div class="post" v-for="post in posts" :key="post.id">
                    <div class="title">
                        {{ post.title }}
                    </div>
                    <div class="date">
                        {{ formatDate(post.date) }}
                    </div>
                    <div class="content">
                        {{ post.body }}
                    </div>
                </div>
            </template>
            <div v-else>nothing to see here.</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            posts: [
                {
                    title: 'Hello World',
                    body: 'hello world',
                    date: new Date(),
                },
                {
                    title: 'Hello World',
                    body: 'hello world',
                    date: new Date(),
                },
            ],
        }
    },
    methods: {
        formatDate(date: Date) {
            var year = date.getFullYear()

            var month = (1 + date.getMonth()).toString()
            month = month.length > 1 ? month : '0' + month

            var day = date.getDate().toString()
            day = day.length > 1 ? day : '0' + day

            return month + '.' + day + '.' + year
        },
    },
})
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0.2em;
}

.date {
    font-size: 0.8em;
    color: rgb(70, 70, 70);
    margin-bottom: 0.6em;
}

.post:not(:last-child) {
    margin-bottom: 1.4em;
    padding-bottom: 1.4em;
    border-bottom: 1px solid rgb(255, 255, 255, 0.1);
}
</style>
