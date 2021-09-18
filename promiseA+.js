
// 新建mypromise类

// 定义3个变量
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
  constructor (executor){
    // 是一个执行器， 进入就会执行
    executor(this.resolve, this.reject)
  }
  // 存储状态的变量 ， 初始值为pending
  status = PENDING

  value = null 
  reason = null 
  // 成功后的状态
  resolve = (value) => {
    // 只有状态是等待， 才能执行修改
    if(this.status === PENDING){
      // 修改状态
      this.status = FULFILLED
      // 保存成功后的值
      this.value = value
    }
  }
  // 失败后的状态
  reject = (value) => {
    if(this.status === PENDING){
      this.status = REJECTED
      this.value = reason
    }
  }

  then(onFulfilled, onRejected){
    // 判断状态
    if(this.status == FULFILLED){
      onFulfilled(this.value)
    }else if(this.status === REJECTED){
      onRejected(this.reason)
    }else if(this.status === PENDING){
      this.onFulfilledCallback = onFulfilled
      this.onRejectedCallback = onRejected
    }
  }
}

