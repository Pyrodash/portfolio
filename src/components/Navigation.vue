<template>
    <div class="nav">
        <template v-for="(item, i) in routes" :key="item.path">
            <router-link
                class="item"
                exact-active-class="active"
                :to="item.path"
            >
                {{ item.name }}
            </router-link>
            <div class="separator" v-if="i < routes.length - 1" :key="i">/</div>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
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
