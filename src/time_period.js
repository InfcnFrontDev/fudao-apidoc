/**
 * @api {get} /TimePeriodApi/getTimePeriodList 获取我的时间（习惯）
 * @apiVersion 2.0.0
 * @apiName getTimePeriodList
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取我的时间（习惯）。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {Integer} userId		用户的ID
 * @apiParam {String} [renqunId=high_quality_population]  人群
 * @apiParam {Integer} [location=1] 	地区类型1：除新疆、西藏外的所有地区2：新疆、西藏地区
 * @apiParam {Integer} [daytype=1] 	天类型1:工作日2:周末
 * @apiParam {Integer} [seasonId]	季节id(1春季2夏季3秋季 4冬季),不传则系统自动计算
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object}     obj                   资讯列表分页
 * @apiSuccess {Object[]}   obj.data              时间段数据
 * @apiSuccess {String}     obj.data.startTime     开始时间
 * @apiSuccess {String}     obj.data.endTime       结束时间
 * @apiSuccess {String}     obj.data.endTimeRange       时间范围
 * @apiSuccess {String}     obj.data.title       分段备注名称
 * @apiSuccess {String}     obj.data.id       分段id
 * @apiSuccess {Date}       obj.data.name         时间段名称
 * @apiSuccess {Integer}    obj.userId                用户id
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"{
 *              "data":[
 *                  {
 *                       "daytype":"2",
 *                       "startTime":"07:30"
 *                       "endTime":"08:30",
 *                       "endTimeRange":"8:15-8:45",
 *                       "id":"ebb8bd60-0f0f-11e7-9b59-000c293e6828",
 *                       "name":"起床阶段",
 *                       "title":"起床阶段"
 *                  },
 *                  ...
 *              ],
 *              "userId": "867200022156895,86720002215690393791782"
 *         }
 *     }
 *
 *
 *
 *
 *
 */

function getTimePeriodList() { return; }

/**
 * @api {get} /TimePeriodApi/updateMyHabit 保存我的时间（习惯）
 * @apiVersion 2.0.0
 * @apiName updateMyHabit
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 保存我的时间段。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} userId 用户的ID
 * @apiParam {jsonstr} data 我的时间的返回的data数据
 *
 * @apiSuccess {Boolean}    ok      是否成功
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *     }
 *
 *
 */
function updateMyHabit() { return; }