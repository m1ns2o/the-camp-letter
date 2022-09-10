import { createRouter, createWebHistory } from "vue-router";
import MailView from "../views/MailView";
import MailWrite from "../views/MailWrite";
import MailText from "../views/MailText";
// import MailTest from "../views/TestView";
// import MailWrite from "../views/MailWrite.vue";

const routes = [
	{
		path: "/list",
		name: "mail",
		component: MailView,
	},
	{
		path: "/",
		name: "write",
		component: MailWrite,
	},
	{
		path: "/text/:id",
		name: "text",
		component: MailText,
	},
	// {
	// 	path: "/test",
	// 	name: "test",
	// 	component: MailTest,
	// },
	// {
	// 	path: "/write",
	// 	name: "write",
	// 	component: MailWrite,
	// },
	// {
	// 	path: "/about",
	// 	name: "about",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
