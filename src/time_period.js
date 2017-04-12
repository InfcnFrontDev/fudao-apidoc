/**
 * @api {get} /TimePeriodApi/getMyTimeStage 获取我的时间阶段
 * @apiVersion 2.0.0
 * @apiName getMyTimeStage
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取我的时间阶段。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success           是否成功
 * @apiSuccess {Object[]}   obj               时间阶段
 * @apiSuccess {String}     obj.id            阶段ID
 * @apiSuccess {String}     obj.name          阶段名称
 * @apiSuccess {String}     obj.title         阶段备注名称
 * @apiSuccess {String}     obj.level         时段级别
 * @apiSuccess {String}     obj.startTime     开始时间
 * @apiSuccess {String}     obj.endTime       结束时间
 * @apiSuccess {String}     obj.startTimeRange     开始时间调整范围
 * @apiSuccess {String}     obj.endTimeRange       结束时间调整范围
 * @apiSuccess {Number}     obj.timeLenRangeMin     时间长度范围限制最小值(min)
 * @apiSuccess {Number}     obj.timeLenReaneMax     时间长度范围限制最大值(min)
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *             {
 *                 "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                 "name":"起床阶段",
 *                 "title":"起床阶段"
 *                 "level":"主要阶段"
 *                 "startTime":"07:30"
 *                 "endTime":"08:30",
 *                 "startTimeRange": "7:45-8:15",
 *                 "endTimeRange": "7:45-8:15",
 *                 "timeLenRangeMin": 20,
 *                 "timeLenReaneMax": 40,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */

function getMyTimeStage() { return; }

/**
 * @api {get} /TimePeriodApi/getGeneralTimeStage 获取通用时间阶段
 * @apiVersion 2.0.0
 * @apiName getGeneralTimeStage
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取通用时间阶段。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success           是否成功
 * @apiSuccess {Object[]}   obj               时间阶段
 * @apiSuccess {String}     obj.id            阶段ID
 * @apiSuccess {String}     obj.name          阶段名称
 * @apiSuccess {String}     obj.title         阶段备注名称
 * @apiSuccess {String}     obj.level         时段级别
 * @apiSuccess {String}     obj.startTime     开始时间
 * @apiSuccess {String}     obj.endTime       结束时间
 * @apiSuccess {String}     obj.startTimeRange     开始时间调整范围
 * @apiSuccess {String}     obj.endTimeRange       结束时间调整范围
 * @apiSuccess {Number}     obj.timeLenRangeMin     时间长度范围限制最小值(min)
 * @apiSuccess {Number}     obj.timeLenReaneMax     时间长度范围限制最大值(min)
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *             {
 *                 "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                 "name":"起床阶段",
 *                 "title":"起床阶段"
 *                 "level":"主要阶段"
 *                 "startTime":"07:30"
 *                 "endTime":"08:30",
 *                 "startTimeRange": "7:45-8:15",
 *                 "endTimeRange": "7:45-8:15",
 *                 "timeLenRangeMin": 20,
 *                 "timeLenReaneMax": 40,
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getGeneralTimeStage() { return; }

/**
 * @api {get} /TimePeriodApi/getMyTimePeriod 获取我的时间分段
 * @apiVersion 2.0.0
 * @apiName getMyTimePeriod
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取我的时间分段。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}   obj                   时间分段
 * @apiSuccess {Date}       obj.id                分段ID
 * @apiSuccess {Date}       obj.name              分段名称
 * @apiSuccess {String}     obj.title             分段备注名称
 * @apiSuccess {String}     obj.startTime         开始时间
 * @apiSuccess {String}     obj.endTime           结束时间
 * @apiSuccess {String}     obj.timeStageId       阶段ID
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *                  {
 *                       "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                       "name":"晨练",
 *                       "title":"晨练"
 *                       "startTime":"07:30"
 *                       "endTime":"08:30",
 *                       "timeStageId": "eb9b0f40-0f0f-11e7-9b59-000c293e6828"
 *                  },
 *                  ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getMyTimePeriod() { return; }

/**
 * @api {get} /TimePeriodApi/getGeneralTimePeriod 获取通用时间分段
 * @apiVersion 2.0.0
 * @apiName getGeneralTimePeriod
 * @apiGroup TimePeriod
 * @apiPermission login
 *
 * @apiDescription 获取通用时间分段。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}   obj                   时间分段
 * @apiSuccess {Date}       obj.id                分段ID
 * @apiSuccess {Date}       obj.name              分段名称
 * @apiSuccess {String}     obj.title             分段备注名称
 * @apiSuccess {String}     obj.startTime         开始时间
 * @apiSuccess {String}     obj.endTime           结束时间
 * @apiSuccess {String}     obj.timeStageId       阶段ID
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj"[
 *             {
 *                 "id": "128624c3-0f17-11e7-9b59-000c293e6828",
 *                 "name":"晨练",
 *                 "title":"晨练"
 *                 "startTime":"07:30"
 *                 "endTime":"08:30",
 *                 "timeStageId": "eb9b0f40-0f0f-11e7-9b59-000c293e6828"
 *             },
 *             ...
 *         ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getGeneralTimePeriod() { return; }