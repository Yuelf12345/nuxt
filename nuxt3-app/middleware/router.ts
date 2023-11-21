export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/page3/page3-3') {
        alert('调整到page3-4')
        return navigateTo('/page3/page3-4')
    }
})
