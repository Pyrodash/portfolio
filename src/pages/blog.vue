<template>
    <div class="blog">
        <div class="header">blog</div>
        <div class="posts">
            <template v-if="loaded">
                <template v-if="posts.length > 0">
                    <div class="post" v-for="post in posts" :key="post.id">
                        <div class="title">
                            {{ post.title }}
                        </div>
                        <div class="date">
                            {{ formatDate(post.date) }}
                        </div>
                        <div class="content">
                            <component :is="post.body" />
                        </div>
                    </div>
                </template>
                <div v-else>nothing to see here.</div>
            </template>
            <template v-else>
                <!-- todo: loading -->
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue'
import { MarkdownModule } from 'vite-plugin-markdown'

const posts = import.meta.glob('/posts/*.md')

export default defineComponent({
    data() {
        return {
            loaded: false,
            posts: [],
            postCount: 0,
        }
    },
    mounted() {
        this.postCount = Object.keys(posts).length
        this.loadPosts()
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
        async loadPosts() {
            const postImports = Object.values(posts).map((postImport) =>
                postImport()
            ) as Array<Promise<MarkdownModule>>

            Promise.all(postImports).then((postModules) => {
                for (const postModule of postModules) {
                    const { attributes, VueComponent } = postModule

                    this.posts.push({
                        title: attributes.title,
                        date: new Date(Number(attributes.date)),
                        body: shallowRef(VueComponent),
                    })
                }

                this.loaded = true
            })
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

.post :deep(img) {
    max-width: 100%;
    height: auto;
}

.post :deep(a) {
    color: #15bbf0;
    /* font-weight: bold; */
}
</style>
