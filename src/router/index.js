import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContentManager from "../views/ContentManager.vue";
import AddContcat from "../views/AddContcat.vue";
import EditContent from "../views/EditContent.vue";
import ViewContent from "../views/ViewContent.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [{
        path: "/",
        name: "home",
        redirect: "/contacts",
        component: HomeView,
    },
    {
        path: "/contacts",
        name: "ContentManager",
        component: ContentManager,
    },
    {
        path: "/contacts/add",
        name: "AddContcat",
        component: AddContcat,
    },
    {
        path: "/contacts/edit/:contactId",
        name: "EditContent",
        component: EditContent,
    },
    {
        path: "/contacts/view/:contactId",
        name: "ViewContent",
        component: ViewContent,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFoundPage",
        component: NotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;