/**
 * Created by Z7 on 2017/11/16.
 */
/*
测试
* 1+2+3+4 = 10
* */
export const calculate = (...args) => {
    return args.reduce((sum, cur) => {
        return sum + cur;
    } ,0)
}