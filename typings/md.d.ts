import { ComponentOptions, Component } from 'vue'

declare module 'vite-plugin-markdown' {
    interface MarkdownModule {
        attributes: Record<string, unknown>
        VueComponent: ComponentOptions
        VueComponentWith: (
            components: Record<string, Component>
        ) => ComponentOptions
    }
}
