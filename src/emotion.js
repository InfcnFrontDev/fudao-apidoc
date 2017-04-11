/**
 * @api {get} /EmotionApi/getEmotionList 获取情绪列表
 * @apiVersion 2.0.0
 * @apiName getEmotionList
 * @apiGroup Emotion
 * @apiPermission login
 *
 * @apiDescription 获取情绪列表。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 *
 * @apiSuccess {Boolean}   ok               是否成功
 * @apiSuccess {Object[]}  good             情绪分类1
 * @apiSuccess {String}    good.name        情绪名称
 * @apiSuccess {String}    good.img         情绪图片


 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "good":[
 *               {
                     name: '开心',
                     img: "15xianmu.png"，
	              },
                 ...
 *          ],
 *         "calm":[
 *               {
                     name: '平静',
                     img: "15xianmu.png"
	              }
	              ...
 *          ],
 *          "bad":[
 *               {
                     name: '羡慕',
                     img: "15xianmu.png"
	              },
                 ...
 *          ],
 *          ...
 *     }
 */
function getMyEmotionList() { return; }

/**
 * @api {get} /EmotionApi/getEmotionIntervene 获取情绪干预详细
 * @apiVersion 2.0.0
 * @apiName getEmotionIntervene
 * @apiGroup Emotion
 * @apiPermission login
 *
 * @apiDescription 获取情绪干预详细。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}   name   情绪名称
 * @apiParam {String}   renqun   人群
 *
 * @apiSuccess {Boolean}     ok       是否成功
 * @apiSuccess {Object}      obj      情绪干预内容
 * @apiSuccess {String}      obj.title    标题
 * @apiSuccess {String}      obj.content  内容
 * @apiSuccess {String}      obj.type     附件类型，1：图片，2：视频，3：音频
 * @apiSuccess {String}      obj.path     图片、音乐路径
 *
 * @apiError NoAccessRight 只有授权的用户可以访问数据。
 * @apiError UserNotFound   用户不存在。
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj":{
 *         "title":"开心一笑",
 *         "content":"有一天小明。。。。。",
 *         "type":"1",
 *         "path":"1.5.jpg"
 *
 *     }
 */
function 	getEmotionIntervene() { return; }