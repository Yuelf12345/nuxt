import { useUserInfo } from '../composables/user'
export default defineNuxtRouteMiddleware((to, from) => {
    const { userInfo } = useUserInfo()
    if (!userInfo.value.token && from.path != '/login' && to.path != '/login') {      
        return navigateTo('/login')
    }
})