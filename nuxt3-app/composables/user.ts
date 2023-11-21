
interface User {
	name: string,
	age: number
}
export const usePerson = () => {
	useState<User>('person', () => ({
	name: '张三',
	age: 18,
}))
}