import Vue from 'vue';
import VueRouter from 'vue-router';
import RoleList from '@/components/RoleList.vue';
import CreateEditRole from '@/components/CreateEditRole.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: RoleList },
  { path: '/create-edit-role', component: CreateEditRole }

];

const router = new VueRouter({
  routes
});

export default router;