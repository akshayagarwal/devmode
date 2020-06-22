import lazyLoadComponent from '../utils/lazy-load-component';
import SkeletonBox from '../../vue/SkeletonBox.vue';

// App main
const main = async() => {
    // Async load the vue module
    const { createApp, defineAsyncComponent } = await import(/* webpackChunkName: "vue" */ 'vue');
    const { default: VueEvents } = await import(/* webpackChunkName: "vueevents" */ 'vue-events');

// Create our vue instance
    const app = createApp({
        components: {
            'episodes-table': lazyLoadComponent({
                componentFactory: defineAsyncComponent(() => import(/* webpackChunkName: "episodestable" */ '../../vue/EpisodesTable.vue')),
                loading: SkeletonBox,
                loadingData: { height: `100vh`, width: `100%` },
            }),
        },
        data: () => ({
        }),
        methods: {
            onTableRefresh(vuetable) {
                app.nextTick(() => vuetable.refresh());
            }
        },
        mounted() {
            this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
        },
    });
    app.use(VueEvents);

    const root = app.mount("#episodes-table");

    return root;
};

// Execute async function
main().then((root) => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
