# 使用方式

1.配置 jdCookies.js

~~~
// 此处填写京东账号cookie, 多个账号为例子
let CookieJDs = [
	'pt_key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX; pt_pin=jd账号1;',
	'pt_key=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy; pt_pin=jd账号2;'
]
~~~



2.配置定时运行脚本

~~~
目前配置了京豆与东东农场批量运行脚本
~~~



3.运行

```
ts-node main.ts
```