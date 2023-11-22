interface User {
  name: string,
  age: number
}

export const usePerson = () => {
  const userInfo  = useState<User>('person', () => ({
    name: '张三',
    age: 18
  }))

  const setAge = (data: number) => {
    userInfo.value.age += data
  }

  return {
    userInfo,
    setAge
  }
}