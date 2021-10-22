<template>
    <div class="header">
        <div class="avatar">
            <div class="image">
                <img src="~/assets/img/motfd.jpeg" />
            </div>
            <div class="label">
                image belongs to mass of the fermenting dregs
            </div>
        </div>
        <div class="content">
            <div class="title">
                hi, i'm <span class="highlighted">ahmed</span>
            </div>
            <div class="body">
                I'm a full stack programmer from Egypt. I'm currently studying
                Software Engineering at Cairo University. I like music,
                videogames and tech.
            </div>
            <div class="links old">
                <a
                    class="item"
                    target="_blank"
                    href="https://github.com/Pyrodash"
                >
                    <span class="icon">
                        <img src="~/assets/img/github.png" />
                    </span>
                    <span class="label">Pyrodash</span>
                </a>
                <a class="item" href="mailto:ahmedelmarakby@hotmail.com">
                    <span class="icon"> @ </span>
                    <span class="label"> ahmedelmarakby@hotmail.com </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.header {
    width: 100%;
    display: flex;
    --HEADER_COLOR: rgba(229, 12, 75, 0.1);
    background-image: linear-gradient(
        135deg,
        var(--HEADER_COLOR) 25%,
        transparent 25%,
        transparent 50%,
        var(--HEADER_COLOR) 50%,
        var(--HEADER_COLOR) 75%,
        transparent 75%,
        transparent 100%
    );
    background-size: 56.57px 56.57px;
    justify-content: center;
    align-items: center;
    padding-top: 4em;
    padding-bottom: 4em;
    /* min-height: 100%; */
}

.avatar {
    margin-right: 1.6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 11em;
}

.avatar .label {
    margin-top: 1.4em;
    font-size: 0.6em;
    color: rgba(255, 255, 255, 0.2);
    text-align: center;
}

.avatar .image {
    width: 11em;
    height: 11em;
    border-radius: 50%;
    overflow: hidden;
    border: 0.6em solid rgba(229, 12, 75, 0.2);
}

.avatar img {
    width: 100%;
    height: 100%;
}

.content {
    padding: 1.2em;
    max-width: 43%;
    word-wrap: break-word;
}

.highlighted {
    font-weight: bold;
    color: #e50c4b;
}

.title {
    font-size: 2.8em;
}

.body {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.2em;
    line-height: 1.6em;
}

.links {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 1.8em;
}
.links.old {
    flex-direction: column;
    font-size: 1.4em;
}
.links .item {
    display: flex;
    align-items: center;
    font-size: 0.8em;
    color: #fff;
    text-decoration: italic;
}
.links .item:not(:last-child) {
    margin-bottom: 0.8em;
}
.links .item .icon {
    font-size: 1.4em;
    margin-right: 0.6em;
    width: 1em;
    height: 1em;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.links .item .icon img {
    width: 100%;
    height: 100%;
}
.links:not(.old) .item .label {
    display: none;
}

@media only screen and (max-width: 600px) {
    .header {
        flex-direction: column;
    }

    .avatar {
        margin-right: 0;
        margin-bottom: 1.6em;
    }

    .avatar .image {
        width: 15em;
        height: 15em;
    }

    .avatar .label {
        font-size: 0.8em;
        margin-top: 0.8em;
    }

    .content {
        max-width: 82%;
        text-align: center;
    }
}
</style>
