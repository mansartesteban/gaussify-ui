import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: "",
        name: "home",
        children: [
            {
                path: "sandbox",
                component: () => import("@/views/Sandbox.vue")
            },
            {
                path: "spacing",
                component: () => import("@/views/Spacing.vue")
            },
            {
                path: "elevation",
                component: () => import("@/views/Elevation.vue")
            },
            {
                path: "border-radius",
                component: () => import("@/views/BorderRadius.vue")
            }
        ]
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const RouterConfig = (app) => {
    app.use(router);
};

export default RouterConfig; 