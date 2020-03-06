// 采用函数的形式

export function logger(req, res, next) {
  console.log('触发了函数中间件');
  next();
}
