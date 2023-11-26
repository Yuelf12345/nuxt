interface UserInfo {
    token: string
    username: string
    password: string
    remember: boolean
    avatar?: string
    loginTime: string | Date
    lastLoginTime: string | Date
}
export const useUserInfo = () => {
    const userInfo = useState<UserInfo>('userInfo', () => ({
        token: '',
        username: '',
        password: '',
        remember: false,
        avatar: `/_nuxt/assets/img/avatar${Math.floor( Math.random() * 10)}.webp`,
        loginTime: '',
        lastLoginTime: ''
    }))

    const userLogin = () => {
        if (!userInfo.value.lastLoginTime) {
            userInfo.value.lastLoginTime = new Date()
        }
        userInfo.value.loginTime = new Date()
        userInfo.value.token = userInfo.value.username
        navigateTo("/home");
    }

    return {
        userInfo,
        userLogin
    }
}