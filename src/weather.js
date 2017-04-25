/**
 * @api {get} /WeatherApi/getWeather 获取实时天气
 * @apiVersion 2.0.0
 * @apiName getWeather
 * @apiGroup Weather
 * @apiPermission login
 *
 * @apiDescription 根据地区，获取实时天气情况。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   weaid       城市气象编号 如:beijing/北京/1/101010100/202.104.153.201
 *
 * @apiSuccess {Boolean}     ok                      是否成功
 * @apiSuccess {Object}      obj                     天气
 * @apiSuccess {String}      obj.days                日期
 * @apiSuccess {String}      obj.week                星期
 * @apiSuccess {String}      obj.cityno              城市/地区
 * @apiSuccess {String}      obj.citynm              城市/地区
 * @apiSuccess {String}      obj.cityid              城市/地区
 * @apiSuccess {String}      obj.temperature         温度
 * @apiSuccess {String}      obj.temperature_curr    实时温度
 * @apiSuccess {String}      obj.humidity            湿度
 * @apiSuccess {String}      obj.weather             天气 详见:weather.wtype
 * @apiSuccess {String}      obj.weather_curr        天气 详见:weather.wtype
 * @apiSuccess {String}      obj.weather_icon        天气图标(目录b/c/d/n供使用) 下载图标
 * @apiSuccess {String}      obj.weather_icon1       天气图标1(目录b/c/d/n供使用) 下载图标
 * @apiSuccess {String}      obj.wind                风向
 * @apiSuccess {String}      obj.winp                风力
 * @apiSuccess {String}      obj.temp_high           最高温度
 * @apiSuccess {String}      obj.temp_low            最低温度
 * @apiSuccess {String}      obj.temp_curr           实时湿度
 * @apiSuccess {String}      obj.humi_high           最高湿度
 * @apiSuccess {String}      obj.humi_low            最低湿度
 * @apiSuccess {String}      obj.weatid              天气ID 详见:weather.wtype
 * @apiSuccess {String}      obj.weatid1             天气ID1 详见:weather.wtype
 * @apiSuccess {String}      obj.windid              风向ID
 * @apiSuccess {String}      obj.winpid              风力ID
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "citynm": "北京",
 *             "cityno": "beijing",
 *             "days": "2017-04-21",
 *             "humi_high": "0",
 *             "humi_low": "0",
 *             "humidity": "19%",
 *             "temp_curr": "20",
 *             "temp_high": "22",
 *             "temp_low": "9",
 *             "temperature": "22℃/9℃",
 *             "temperature_curr": "20℃",
 *             "weaid": "1",
 *             "weather": "晴",
 *             "weather_curr": "晴",
 *             "weather_icon": "http://api.k780.com:88/upload/weather/d/0.gif",
 *             "weather_icon1": "",
 *             "weatid": "1",
 *             "weatid1": "",
 *             "week": "星期五",
 *             "wind": "西北风",
 *             "windid": "15",
 *             "winp": "4级",
 *             "winpid": "204"
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getWeather() { return; }

/**
 * @api {get} /WeatherApi/getPM25 获取PM2.5空气质量
 * @apiVersion 2.0.0
 * @apiName getPM25
 * @apiGroup Weather
 * @apiPermission login
 *
 * @apiDescription 根据地区，获取当前PM2.5数据。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   weaid       城市气象编号 如:beijing/北京/1/101010100/202.104.153.201
 *
 * @apiSuccess {Boolean}     ok                  是否成功
 * @apiSuccess {Object}      obj                 PM2.5数据
 * @apiSuccess {String}      aqi		         aqi值
 * @apiSuccess {String}      aqi_scope		     指数范围
 * @apiSuccess {String}      aqi_levid		     级别编号
 * @apiSuccess {String}      aqi_levnm		     级别
 * @apiSuccess {String}      aqi_remark		     注意事项
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "weaid": "1",
 *             "cityno": "beijing",
 *             "citynm": "北京",
 *             "cityid": "101010100",
 *             "aqi": "34",
 *             "aqi_scope": "0-50",
 *             "aqi_levid": "1",
 *             "aqi_levnm": "优",
 *             "aqi_remark": "参加户外活动呼吸清新空气"
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getPM25() { return; }