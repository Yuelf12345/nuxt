interface UserInfo {
    token: string
    username: string
    password: string
    remember: boolean
    avatar?: string
    loginTime: string | Date
    lastLoginTime: string | Date
}
const avatarList = [
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-1.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-2.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-3.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-4.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-5.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-6.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-7.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-8.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-9.webp',
    'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/image-gallery/images/img-11.webp'
]
export const useUserInfo = () => {
    const userInfo = useState<UserInfo>('userInfo', () => ({
        token: '',
        username: '',
        password: '',
        remember: false,
        avatar: avatarList[Math.floor(Math.random() * 10)],
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