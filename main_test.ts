import jxcfd from './jd_cfd_module'
// import jxmc from './jd_jxmc_module'
// import jxgc from './jd_jxgc_module'
// import beanSign from './jd_bean_sign_module'
// import jx88hb from './jd_88hb_module'

import { getDate } from "date-fns";

var log4js = require("log4js")
var log4js_config = require("./log4js.json")
log4js.configure(log4js_config);

var logFile = log4js.getLogger('log_file');

function myLog (msg, count) {  
  var m = msg + " - 第 " + count + " 次执行";

  console.log(m);
  logFile.info(m);
}

let countDaily = 1;
let countMinutes = 1;

// var jd_bean_home_module= require('./jd_bean_home_module')
// var jd_fruit_module= require('./jd_fruit_module')

// 已测试
// myLog("一天一运行 - 京豆", countDaily++);
// jd_bean_home_module.run();
jxcfd.run();

// myLog("一小时一运行 - 东东农场", countMinutes++);
// jd_fruit_module.run();

// 未测试
//cfd.run();
// myLog("一小时一运行 - 京喜牧场", countMinutes);
// jxmc.run();

// countMinutes++;

//jxgc.run();
//beanSign.run();

// setInterval(async function() {
//     myLog("一天一运行 - 京豆", countDaily);
//     await jd_bean_home_module.run();
//     countDaily++;
//   },
//   1000 * 60 * 60 * 24 // 每天执行一次
// );

// setInterval(async function()
//   {
//     myLog("一小时一运行 - 京喜牧场", countMinutes);
//     await jxmc.run();
//     countMinutes++;
//   },
//   1000 * 60 * 1 // 每 60 分钟执行一次
// );