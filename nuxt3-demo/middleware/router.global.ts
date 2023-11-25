import { useUserInfo } from '../composables/user'
export default defineNuxtRouteMiddleware((to, from) => {
    console.log(1);
    const { userInfo} = useUserInfo()
    console.log('useUserInfo', userInfo.value);
    if (!userInfo.value.token && from.path != '/login' && to.path != '/login') {
        return navigateTo('/login')
    }
})