
## 可通过request id 来获取检验结果
<your host>/app/index.html#/app/labresult?reid=<request id>
```
       /// Token验证
        /// </summary>
        /// <param name="token"></param>
        /// <returns>true:验证通过，false:验证失败</returns>
        [HttpGet]
        [ActionName("authenticate")]
        public bool ValidateToken(string token)
        {
            var tokenCookie = HttpContext.Current.Request.Cookies["token"];
            if (tokenCookie != null)
            {
                if (string.IsNullOrEmpty(tokenCookie.Value))
                {
                    return false;
                }
                var ret = _userService.ValidateToken(tokenCookie.Value);
                return ret;
            }
            return false;
        }
 Roger
这个方法注意一下，如果你用的localStorage, 就直接：
 Roger

                var ret = _userService.ValidateToken(tokenCookie.Value);
                return ret;
 Roger
这一句话就够了
```