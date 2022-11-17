
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/', redirect: '/categories'},
      {path: '/categories', component: () => import('src/pages/CategoriesPage.vue')},
      { path: '/items/:key', component: () => import('src/pages/ItemsPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/categories',
    // component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
