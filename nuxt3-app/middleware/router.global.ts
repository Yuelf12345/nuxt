export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path === '/page4'){
      alert('禁止访问');
      return abortNavigation()
    }
    // if(to.path === '/page2'){
    //    return navigateTo('/page3')
    // }
  })
  