<template>
    <div class="error">
        <div class="code">404</div>
        <div class="message">not found</div>
    </div>
</template>

<style scoped>
.error {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 8vh;
    padding: 0;
    margin-top: 0.4em;
    margin-bottom: 1em;
}

.code {
    font-size: 1.2em;
    color: #e50c4b;
}

.message {
    font-family: Caveat;
}
</style>
