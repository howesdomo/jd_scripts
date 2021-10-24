import jd_jxmc_module from './jd_jxmc_module'
// import cfd from './jd_cfd_module'
// import jxgc from './jd_jxgc_module'
// import beanSign from './jd_bean_sign_module'

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

let countDaily = 0;
let countMinutes = 0;

var jd_bean_home_module= require('./jd_bean_home_module')
var jd_fruit_module= require('./jd_fruit_module')

// 已测试
// 每天执行一次
countDaily++;
myLog("每 1 天运行 - 京豆", countDaily);
jd_bean_home_module.run();

// 每 x 分钟执行一次
countMinutes++;
myLog("每 60 分钟运行 - 东东农场", countMinutes);
jd_fruit_module.run();
// myLog("每 60 分钟运行 - 京喜牧场", countMinutes);
// jd_jxmc_module.run();

// 未测试
//cfd.run();
//jxmc.run();
//jxgc.run();
//beanSign.run();

setInterval
(
  async function() 
  {
    countDaily++;  
    myLog("每 1 天运行 - 京豆", countDaily);
    await jd_bean_home_module.run();
  },
  1000 * 60 * 60 * 24 // 每天执行一次
);

setInterval
(
  async function()
  {
    countMinutes++;    
    myLog("每 60 分钟运行 - 东东农场", countMinutes);
    await jd_fruit_module.run();
    // myLog("每 60 分钟运行 - 京喜牧场", countMinutes);
    // await jd_jxmc_module.run();
  },
  1000 * 60 * 60 // 每 60 分钟执行一次
);