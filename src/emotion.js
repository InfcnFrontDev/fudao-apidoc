/**
 * @api {get} /EmotionApi/getEmotionIntervene 获取情绪干预
 * @apiVersion 2.0.0
 * @apiName getEmotionIntervene
 * @apiGroup Emotion
 * @apiPermission login
 *
 * @apiDescription 根据情绪，随机获取一条情绪干预内容（适合于当前用户人群）。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   emotion       情绪,
 * @apiParam {String}   grade         分级
 *
 * @apiSuccess {Boolean}     ok                 是否成功
 * @apiSuccess {Object}      obj                情绪干预内容
 * @apiSuccess {String}      obj.emotion           情绪名称
 * @apiSuccess {String}      obj.threeCharacterClassic       三字经
 * @apiSuccess {String}      obj.influence       对器官的影响
 * @apiSuccess {String}      obj.methods         干预方法
 * @apiSuccess {String}      obj.methods.fenji   级别
 * @apiSuccess {String}      obj.methods.title   标题
 * @apiSuccess {String}      obj.methods.content  内容
 * @apiSuccess {Number}      obj.methods.type     1:图文类、2:文字类、3:音频类
 * @apiSuccess {String}      obj.methods.path     图片、音乐路径

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "emotion":"生气",
 *             "threeCharacterClassic":'人之初，性本善。。。',
 *             "influence":'生气不利于健康。。。。。',
 *             "methods":[
 *                  {
 *                      "fenji":'一级'，
 *                      "title":"开心一笑",
 *                      "content":"有一天小明。。。。。",
 *                      "type":1,
 *                      "img":"1.5.jpg",
 *                  },{
 *                      "fenji":'二级'，
 *                      "title":"开心一笑",
 *                      "content":"有一天小明。。。。。",
 *                      "type":2,
 *                      "img":"1.5.jpg",
 *                  },{
 *                      "fenji":'三级'，
 *                      "title":"《rock》",
 *                      "content":"有一天小明。。。。。",
 *                      "type":3,
 *                      "img":"1.5.mp3",
 *                  },
 *             ]
 *
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getEmotionIntervene() { return; }

/**
 * @api {get} /EmotionApi/getEmotionFactor 获取情绪因素
 * @apiVersion 2.0.0
 * @apiName getEmotionFactor
 * @apiGroup Emotion
 * @apiPermission login
 *
 * @apiDescription 根据情绪，获取产生情绪的宏观、微观因素及情绪分级。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   emotion       情绪
 *
 * @apiSuccess {Boolean}     ok                     是否成功
 * @apiSuccess {String}      obj                    情绪因素内容
 * @apiSuccess {String}      obj.emotion            情绪名称
 * @apiSuccess {Object[]}    obj.macroscopic        情绪的宏观因素
 * @apiSuccess {String}      obj.macroscopic.name   宏观因素名称
 * @apiSuccess {String}      obj.macroscopic.img    宏观因素图标地址
 * @apiSuccess {Object[]}    obj.grade              情绪分级
 * @apiSuccess {String}      obj.grade.name         情绪名称
 * @apiSuccess {String}      obj.grade.fenji        情绪分级数
 * @apiSuccess {Array}       obj.reasons             情绪微观原因
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "emotion":"生气",
 *             "macroscopic":[
 *                 {
 *                      "name":"狂风骤雨",
 *                      "img":"2.jpg"
 *                 },
 *                 {
 *                      "name":"狂风骤雨",
 *                      "img":"2.jpg"
 *                 },
 *                 ...
 *             ],
 *             "grade":[
 *                  {
 *                      "title":"生气"，
  *                      "name":"一级"
 *                  },
 *                  {
 *                      "title":"愤怒"，
  *                      "name":"二级"
 *                  },
 *                  {
 *                      "title":"暴怒"，
  *                      "name":"三级"
 *                  },
 *             ],
 *             "reasons":["工作困难","家庭生活不和睦","患有慢性疾病",...],
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getEmotionFactor() { return; }