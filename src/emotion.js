/**
 * @api {get} /EmotionApi/getEmotionIntervene 获取情绪干预
 * @apiVersion 2.0.0
 * @apiName getEmotionIntervene
 * @apiGroup Emotion
 * @apiPermission login
 *
 * @apiDescription 根据情绪和人群，随机获取一条情绪干预内容。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   emotion       情绪名称
 * @apiParam {String}   crowd         人群
 *
 * @apiSuccess {Boolean}     ok       是否成功
 * @apiSuccess {String}      obj      情绪干预内容
 * @apiSuccess {String}      obj.id       ID
 * @apiSuccess {String}      obj.title    标题
 * @apiSuccess {String}      obj.content  内容
 * @apiSuccess {Number}      obj.type     附件类型，1：图片，2：视频，3：音频
 * @apiSuccess {String}      obj.path     图片、音乐路径

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "id":"1106775f-0d7d-11e7-9b59-000c293e6828",
 *             "title":"开心一笑",
 *             "content":"有一天小明。。。。。",
 *             "type":1,
 *             "path":"1.5.jpg",
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getEmotionIntervene() { return; }