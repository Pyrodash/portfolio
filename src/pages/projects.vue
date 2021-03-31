<template>
    <div class="projects">
        <div class="header">projects</div>
        <div class="project">
            <div class="content">
                <div class="title">
                    <a
                        href="https://github.com/pyrodash/libamf"
                        target="_blank"
                    >
                        libamf
                    </a>
                </div>
                <div class="description">
                    <p>
                        libamf is a node.js library for the purpose of parsing
                        and writing data in Adobe's Action Message Format. It
                        comes with an Adobe-Flash-compatible server for
                        transmitting AMF data and a client for it. It also
                        contains a parser for .sol files which are used to store
                        Adobe Flash settings and user data. It was initially
                        created to reverse engineer the games Panfu and World of
                        Cars Online.
                    </p>
                </div>
            </div>
            <div class="artwork right">
                <div class="image">
                    <img src="~/assets/img/nge.jpg" width="300" />
                </div>
                <div class="label">
                    The General Zapped an Angel
                    <br />
                    Karel Thole, 1970
                </div>
            </div>
        </div>
        <div class="project reverse-mobile">
            <div class="artwork left">
                <div class="image">
                    <img src="~/assets/img/yue.jpg" width="300" />
                </div>
                <div class="label">
                    WEDNESDAY
                    <br />
                    <a
                        href="https://www.pixiv.net/en/users/1754063"
                        target="_blank"
                    >
                        yue</a
                    >, 2019
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <a href="https://github.com/sakuraapp" target="_blank">
                        Sakura
                    </a>
                </div>
                <div class="preview">
                    <img src="~/assets/img/sakura.png" height="400" />
                </div>
                <div class="description">
                    <!--<p>
                        Sakura is a web app and browser extension that allows you to
                        watch media with other people. Initially, I thought slow
                        internet would cause too many difficulties for any kind of
                        synchronization so I decided to start it as a torrent client
                        that would let you watch torrented video with other people.
                        It was created with Electron and pure JavaScript. The design
                        was very professional and compact but eventually I ran into
                        issues due to the limitations of Chromium's stock video
                        player and ffmpeg binaries, and I was struggling to design a
                        video player that fit in with the compact design. I decided
                        to start over as a web app.
                    </p>
                    <p>
                        For the web app, I decided to learn how to use React, so it
                        was originally running on React as well as TypeScript. I
                        didn't really like the React ecosystem and the usage of
                        Redux with TypeScript, so I transitioned into using Vue
                        instead. I created a browser extension to bypass browser
                        restrictions on iframe elements. I was able to make up for
                        slow internet and buffering by detecting latency on each
                        packet. The extension is able to detect videos on most
                        websites like Netflix, YouTube, Twitch and other random
                        players like JWPlayer.
                    </p>
                    <p>
                        Previously, I had used a web app known as Rabbit for this
                        purpose. It would give you a virtual machine with a browser
                        and anybody could watch the screen, and even control it.
                        However, that technique was simply too costly and hard to
                        profit from. So eventually, Rabbit had to shut down. I did
                        not consider it at all in the beginning because it would be
                        too inconvenient, but after I had finished my video sync, I
                        felt like the service would be incomplete without virtual
                        machines for specific use cases.
                    </p>
                    <p>
                        I was able to implement the feature by utilizing Kubernetes
                        as a cluster manager and docker for my containers.
                        Initially, I was having a hard time figuring out how I would
                        be able to display the screen to users and let them control
                        it flawlessly, I started by creating an ffmpeg stream that
                        was received by a node.js media server, and users would
                        connect to the media server and receive the video and audio
                        data. However, there was too much latency, especially when
                        you were controlling the screen, so I had to research low
                        latency streaming protocols.
                    </p>
                    <p>
                        WebRTC is the one I chose, it's used for real-time calls so
                        naturally it would need to have the least latency. I was
                        unable to find any implementations for WebRTC in node.js,
                        but I found a solid one in Golang. So I created a simple
                        streaming gateway in Go that received RTP input and streamed
                        to WebRTC peers. It's configured to accept multiple streams
                        to the same room so I could implement quality control.
                    </p>-->
                    <p>
                        Sakura is a web app and browser extension that allows
                        you to watch media with other people. The web app was
                        built with TypeScript and Vue, the containers use Docker
                        while Kubernetes is used for cluster management. It also
                        employs an RTP to WebRTC streaming gateway written in
                        Golang. The service aims to achieve minimal latency when
                        using the video sync and even when using a container.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects {
    padding: 2em;
}

.project {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.project:not(:last-child) {
    margin-bottom: 2em;
}

.project .title {
    font-family: Caveat;
    font-size: 1.5em;
    color: #e97295;
}
.project .title.right {
    text-align: right;
}

.project .preview {
    text-align: center;
    display: none;
}

.project .description {
    font-size: 0.8em;
}
.project .description p {
    text-indent: 1em;
}

.project .artwork {
    margin-top: 0;
    margin-bottom: 0;
}
.project .artwork.right {
    margin-left: 2em;
}
.project .artwork.left {
    margin-right: 2em;
}

.artwork {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.4em;
    margin-bottom: 1.4em;
    text-align: center;
}
.artwork.left {
    align-items: flex-start;
    text-align: left;
}
.artwork.right {
    align-items: flex-end;
    text-align: right;
}
.artwork .label {
    font-size: 0.6em;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 0.2em;
    line-height: 1.4em;
}

@media only screen and (max-width: 600px) {
    .project {
        flex-direction: column;
    }
    .project.reverse-mobile {
        flex-direction: column-reverse;
    }

    .project .artwork {
        margin-left: 0 !important;
        margin-right: 0 !important;
        margin-top: 2em;
        /* align-items: center;
        text-align: center; */
    }
}
</style>
