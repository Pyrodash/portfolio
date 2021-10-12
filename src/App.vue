<template>
    <div id="app">
        <Header />
        <Navigation />
        <router-view class="page" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'

export default defineComponent({
    components: {
        Header,
        Navigation,
    },
})
</script>

<style scoped>
#app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.page {
    padding: 2em;
    font-size: 1.6em;
}

.page :deep(.header) {
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 0.6em;
}
</style>
