
export const useColor = () => useState<string>('color', () => 'red')



interface test {
	/**姓名 */
	name: string,
	/**年龄 */
	age: number
	/**数组 */
	arr: number[]
}
export const usePeople = () => useState<test>('people', () => ({ //箭头函数return对象时的简写
	name: '小明',
	age: 18,
	arr: [1, 2]
}))