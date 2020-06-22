// App main
const main = async() => {
    // Async load the vue module
    const { createApp, defineAsyncComponent } = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const app = createApp({
        components: {
            'amplitude-player': defineAsyncComponent(() => import(/* webpackChunkName: "amplitudeplayer" */ '../../vue/amplitude-player.vue')),
        },
        data: () => ({
        }),
        methods: {
        },
        mounted() {
        },
    });

    const root = app.mount("#amplitude-player");

    return root;
};

// Execute async function
main().then((root) => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
