<template>
    <div class="nav">
        <template v-for="(item, i) in routes">
            <router-link
                class="item"
                exact-active-class="active"
                :key="item.path"
                :to="item.path"
            >
                {{ item.name }}
            </router-link>
            <div class="separator" v-if="i < routes.length - 1" :key="i">/</div>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        routes() {
            return this.$router.options.routes
        },
        activeRoute() {
            return this.$router.currentRoute
        },
    },
})
</script>

<style scoped>
.nav {
    padding: 1.2em;
    display: flex;
    justify-content: center;
    font-size: 1.2em;
}

.separator {
    margin-left: 0.6em;
    margin-right: 0.6em;
}

.item {
    color: #e85f87;
}
.item.active {
    font-weight: bold;
}
</style>
