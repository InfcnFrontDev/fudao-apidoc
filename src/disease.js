/**
 * @api {get} /DiseaseApi/getAllDiseaseList 获取全部疾病列表
 * @apiVersion 2.0.0
 * @apiName getAllDiseaseList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取所有疾病列表（适合于当前用户人群）
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 全部疾病数据
 * @apiSuccess {Object[]}   obj.liaoShen        疗身疾病
 * @apiSuccess {String}     obj.liaoShen.id              疾病ID
 * @apiSuccess {String}     obj.liaoShen.name            疾病名称
 * @apiSuccess {String}     obj.liaoShen.img             疾病图片
 * @apiSuccess {Object[]}   obj.liaoXin         疗心疾病
 * @apiSuccess {String}     obj.liaoXin.id              疾病ID
 * @apiSuccess {String}     obj.liaoXin.name            疾病名称
 * @apiSuccess {String}     obj.liaoXin.img             疾病图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": {
 *           "liaoShen": {
 *               "意外伤害": [
 *                   {
 *                       "id": "077fbcc94bd843f7a308519bc4f9b532",
 *                       "img": "/icons/disease/dianxian.png",
 *                       "name": "癫痫",
 *                   },
 *               ],
 *               ...
 *           },
 *           "liaoXin": [
 *               {
 *                   "id": "077fbcc94bd843f7a308519bc4f9b532",
 *                   "img": "/icons/disease/dianxian.png",
 *                   "name": "癫痫",
 *               },
 *               {
 *                   "id": "131f725025e04c1485c9463bcf0e8b86",
 *                   "img": "/icons/disease/toutong.png",
 *                   "name": "头痛",
 *               },
 *               ...
 *           ]
 *       }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getAllDiseaseList() {   return; }

/**
 * @api {get} /DiseaseApi/getMyDiseaseList 获取我的疾病列表
 * @apiVersion 2.0.0
 * @apiName getMyDiseaseList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取我的疾病列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             疾病列表
 * @apiSuccess {String}     obj.id          疾病ID
 * @apiSuccess {String}     obj.name        疾病名称
 * @apiSuccess {String}     obj.title       疾病显示名称
 * @apiSuccess {String}     obj.img         疾病图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "id": "17",
 *               "name": "跌倒",
 *               "img": "/icons/disease/diedao.png",
 *           },
 *           ...
 *       ],
 *   }
 *
 * @apiUse AuthenticatedError
 *
 *
 */
function getMyDiseaseList() {   return; }

/**
 * @api {get} /DiseaseApi/addMyDisease 添加我的疾病
 * @apiVersion 2.0.0
 * @apiName addMyDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  添加我的疾病
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseId        疾病ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function addMyDisease() {   return; }

/**
 * @api {get} /DiseaseApi/deleteMyDisease 删除我的疾病
 * @apiVersion 2.0.0
 * @apiName deleteMyDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  删除我的疾病
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseId        疾病ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteMyDisease() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseDailyMethodList 获取疾病日常疗法列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseDailyMethodList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  根据人群、疾病，获取疾病日常疗法列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseId        疾病ID
 *
 * @apiSuccess {Boolean}    ok                              是否成功
 * @apiSuccess {Object[]}   obj                             疾病的日常疗法列表
 * @apiSuccess {String}     obj.type                        日常疗法的类型名称
 * @apiSuccess {Object}     obj.suitable                    日常疗法的饮食类型的宜食
 * @apiSuccess {Object}     obj.fasting                     日常疗法的饮食类型的禁食
 * @apiSuccess {Object[]}   obj.methods                     日常疗法的各阶段饮食或方法列表
 * @apiSuccess {String}     obj.methods.timePeriod          日常疗法中饮食类型的适用时段
 * @apiSuccess {Object[]}   obj.methods.suitable            日常疗法中饮食类型的宜食
 * @apiSuccess {Object[]}   obj.methods.fasting             日常疗法中饮食类型的禁食(早餐、下午茶阶段不包含此字段，午餐、晚餐阶段包含此字段)
 * @apiSuccess {String}     obj.methods.id                  日常疗法中除饮食类型外其他类型的方法ID
 * @apiSuccess {String}     obj.methods.name                日常疗法中除饮食类型外其他类型的方法名称
 * @apiSuccess {String}     obj.methods.timePeriod          日常疗法中除饮食类型外其他类型的方法适用时段
 * @apiSuccess {String}     obj.principle       日常疗法的除饮食外的其他类型的日常疗法原理
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 * {
 *      "ok":true,
 *      "obj": [
 *           {
 *               "type": "饮食",
 *               "suitable": "寒凉性的食物/豆类及豆制品/含微量元素的食物",
 *               "fasting": "辛辣刺激性食物/温热性食物/油炸类食物",
 *               "methods": [
 *                   {
 *                       "timePeriod": "早餐",
 *                       "suitable": ["牛奶", "薏米"]
 *                   },
 *                   {
 *                       "timePeriod": "午餐",
 *                       "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *                       "fasting": ["狗肉", "鸭血"]
 *                   },
 *                   {
 *                       "timePeriod": "下午茶",
 *                       "suitable": ["香梨", "猕猴桃"]
 *                   },
 *                  {
 *                      "timePeriod": "晚餐",
 *                      "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *                      "fasting": ["狗肉", "鸭血"]
 *                  }
 *              ]
 *           },
 *           {
 *               "type": "起居",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "动",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "静",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "娱乐",
 *               "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。"
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *       ]
 * }
 *
 * @apiUse AuthenticatedError
 *
 */
function getDiseaseDailyMethodList() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseDailyMethodDetail 获取疾病日常疗法详情
 * @apiVersion 2.0.0
 * @apiName getDiseaseDailyMethodDetail
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病日常疗法详情
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   id         日常方法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             疾病的日常疗法方法详情
 * @apiSuccess {String}     obj.id                        方法ID
 * @apiSuccess {String}     obj.name                      方法名称
 * @apiSuccess {String}     obj.img                       方法附件：图片/音频/视频
 * @apiSuccess {String}     obj.threeCharacterClassic     方法三字经
 * @apiSuccess {String}     obj.detail                   方法详情
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok":true,
 *      "obj": {
 *          "id": "91723491hf-ajdhfkaqwerqew1239-4193749fhaw",
 *          "name": "睡前不要吃东西",
 *          "img": "/photo/shuiqianbuchidongxi.jpg",
 *          "threeCharacterClassic":"用粗盐，可减肥，拍废物，促代谢。",
 *          "detail": "1、晚餐最好是睡前4个小时吃。除了晚餐，最好不要吃夜宵。\n2、睡前大吃大喝向来是减肥的大忌，水也要少喝。\n3、除此之外，一些坏习惯也要改改，比如上网看电视时喜欢吃东西，这是很容易堆积脂肪的，而且入睡前吃掉太多东西，很容易让人兴奋，更加不容易睡眠，这会直接影响到睡眠减肥的效果哦!",
 *       }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 *
 */
function getDiseaseDailyMethodDetail() {   return; }

/**
 * @apiIgnore 不要了
 * @api {get} /DiseaseApi/getDiseaseProfessionalMethodList 获取疾病专业疗法列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseProfessionalMethodList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  根据人群、疾病，获取疾病的专业疗法列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseId        疾病ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             疾病的专业疗法列表
 * @apiSuccess {String}     obj.id          专业方法ID
 * @apiSuccess {String}     obj.name        专业方法名称
 * @apiSuccess {String}     obj.type        专业方法分类
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok": true,
 *      "obj":[
 *           {
 *               "id": "101",
 *               "name": "拔罐疗法",
 *               "type": "拔罐"
 *           },
 *           ...
 *      ]
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getDiseaseProfessionalMethodList() {   return; }

/**
 * @apiIgnore 不要了
 * @api {get} /DiseaseApi/getDiseaseProfessionalMethodDetail 获取疾病专业疗法详情
 * @apiVersion 2.0.0
 * @apiName getDiseaseProfessionalMethodDetail
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  根据疾病专业疗法ID, 获取疾病专业疗法详情
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       id              专业疗法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             疾病的专业疗法方法对象
 * @apiSuccess {String}     obj.id          方法ID
 * @apiSuccess {String}     obj.name        方法名称
 * @apiSuccess {String}     obj.detail      方法详情
 * @apiSuccess {String}     obj.type        方法类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok":true,
 *      "obj": {
 *         "id": "0128340-123759183481635-91328749123",
 *         "name": "拔罐疗法",
 *         "detail": "取穴：中脘、三阴交、天枢、巨阙、大横、腹结。\n操作：每次选用4-5穴，根据患者肥胖程度选用大号或中号火罐，以闪火法拔罐，留罐10-20min，每日1次，15次为1个疗程。",
 *         "type": "拔罐"
 *      }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getDiseaseProfessionalMethodDetail() {   return; }

/**
 * @api {get} /DiseaseApi/getDisease 获取疾病详情
 * @apiVersion 2.0.0
 * @apiName getDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  根据问题ID、名称，获取疾病问题详情，若该问题不存在ok返回false
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam (ID查询){String}  id        问题ID
 * @apiParam (名称查询){String}  name        问题名称
 *
 * @apiSuccess {Boolean}    ok                  是否存在该问题
 * @apiSuccess {Object}     obj                 问题详情
 * @apiSuccess {String}     obj.id              ID
 * @apiSuccess {String}     obj.name            疾病名称
 * @apiSuccess {String}     obj.type            疾病类型
 * @apiSuccess {String}     obj.crowd           人群
 * @apiSuccess {String}     obj.img             疾病图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": {
 *           "id": "02000b2c5bd841f4a0549b10f5680f1e",
 *           "name": "消化不良",
 *           "type": "职业病",
 *           "crowd": "woman_un",
 *           "img": "/icons/disease/xiaohuabuliang.png"
 *       }
 *   }
 *
 */
function getDisease() {   return; }


/**
 * @api {get} /DiseaseApi/getDiseaseRelevant 获取疾病相关
 * @apiVersion 2.0.0
 * @apiName getDiseaseRelevant
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病相关数据，包括经线、穴位、部位、循环系统。数据区分人群。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseType              问题分类
 * @apiParam {String}  disease                  问题名称
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                 问题详情
 * @apiSuccess {String}     obj.meridians              相关经络
 * @apiSuccess {String}     obj.meridians.code               经络编码
 * @apiSuccess {String}     obj.meridians.name             经络名称
 * @apiSuccess {String}     obj.meridians.correlativity         经络相关关系
 * @apiSuccess {String}     obj.meridians.map              经络地图路径
 * @apiSuccess {String}     obj.acupoints              相关穴位
 * @apiSuccess {String}     obj.acupoints.code               穴位编码
 * @apiSuccess {String}     obj.acupoints.name             穴位名称
 * @apiSuccess {String}     obj.acupoints.correlativity         穴位相关关系
 * @apiSuccess {String}     obj.acupoints.map              穴位地图路径
 * @apiSuccess {String}     obj.organs                 相关器官
 * @apiSuccess {String}     obj.organs.code                  器官编码
 * @apiSuccess {String}     obj.organs.name                器官名称
 * @apiSuccess {String}     obj.organs.correlativity            器官相关关系
 * @apiSuccess {String}     obj.organs.map                 器官地图路径
 * @apiSuccess {String}     obj.circulatorySystems              相关循环系统
 * @apiSuccess {String}     obj.circulatorySystems.code               循环系统编码
 * @apiSuccess {String}     obj.circulatorySystems.name             循环系统名称
 * @apiSuccess {String}     obj.circulatorySystems.correlativity         循环系统相关关系
 * @apiSuccess {String}     obj.circulatorySystems.map              循环系统地图路径
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": {
 *           "meridians": [
 *               {
 *                   "name": "足厥阴肝经",
 *                   "correlativity": "中毒的病因主要是肝肾阴亏。",
 *                   "list":[
 *                       {
 *                           "code":"ZONGSHAOYIN",
 *                           "map":"2.svg"
 *                       },
 *                       {
 *                           "code":"2",
 *                           "map":"2.svg"
 *                       },
 *                       ...
 *                   ]
 *               },
 *               ...
 *           ],
 *           "acupoints": [
 *               {
 *                   "name": "风池",
 *                   "correlativity": "滋养肝肾。",
 *                   "list":[
 *                       {
 *                           "code":"ZONGSHAOYIN",
 *                           "map":"2.svg"
 *                       },
 *                       {
 *                           "code":"2",
 *                           "map":"2.svg"
 *                       },
 *                       ...
 *                   ]
 *               },
 *               ...
 *           ],
 *           "organs": [
 *               {
 *                   "name": "脚",
 *                   "correlativity": "痛风多引起远心端关节受累，尤其是大脚趾，痛风经常在半夜突然发作，并且很痛。",
 *                   "list":[
 *                       {
 *                           "code":"ZONGSHAOYIN",
 *                           "map":"2.svg"
 *                       },
 *                       {
 *                           "code":"2",
 *                           "map":"2.svg"
 *                       },
 *                       ...
 *                   ]
 *               },
 *               ...
 *           ],
 *           "circulatorySystems": [
 *               {
 *                   "name": "心血管系统",
 *                   "correlativity": "机体接触各种毒物，引发组织结构和功能损害、代谢障碍而发生疾病或死亡者，称为中毒。",
 *                   "list":[
 *                       {
 *                           "code":"ZONGSHAOYIN",
 *                           "map":"2.svg"
 *                       },
 *                       {
 *                           "code":"2",
 *                           "map":"2.svg"
 *                       },
 *                       ...
 *                   ]
 *               },
 *               ...
 *           ]
 *       }
 *   }
 *
 */
function getDiseaseRelevant() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseAcupoints 获取疾病相关穴位
 * @apiVersion 2.0.0
 * @apiName getDiseaseAcupoints
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病相关穴位。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseType              问题分类
 * @apiParam {String}  disease                  问题名称
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                 相关穴位集合
 * @apiSuccess {String}     obj.code                  穴位编码
 * @apiSuccess {String}     obj.name                  穴位名称
 * @apiSuccess {String}     obj.part                      部位
 * @apiSuccess {String}     obj.location                  相关器官
 * @apiSuccess {String}     obj.healthEffect              穴位保健效果
 * @apiSuccess {String}     obj.healthMethod              穴位保健方法
 * @apiSuccess {String}     obj.simpleAcupointSelection   简便取穴法
 * @apiSuccess {String}     obj.mattersNeedAttention      注意事项
 * @apiSuccess {String}     obj.contraindication          禁忌症
 * @apiSuccess {String}     obj.img                       图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "name": "天府",
 *               "part": "背部",
 *               "location": "在脊柱区，第7胸椎棘突下，后正中线旁开1.5寸。",
 *               "healthEffect": "活血行血，补血养血。",
 *               "healthMethod": "他人代为按揉。施术者两手置于被施术者上背部，双手拇指指腹分别按揉两侧的膈俞穴。按揉的手法要均匀、柔和，以局部有酸痛感为佳。早晚各1次，每次按揉2～3分钟，两侧膈俞穴同时按揉。",
 *               "simpleAcupointSelection": "在肩胛下角水平连线，后正中线旁开2横指处。",
 *               "mattersNeedAttention": null,
 *               "contraindication": null,
 *               "img": "xuewei/geshu.jpg",
 *           },
 *           ...
 *       ]
 *   }
 *
 */
function getDiseaseAcupoints() {   return; }


/**
 * @api {get} /DiseaseApi/getDiseaseMeridians 获取疾病相关经络
 * @apiVersion 2.0.0
 * @apiName getDiseaseMeridians
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病相关经络。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseType              问题分类
 * @apiParam {String}  disease                  问题名称
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 相关经络集合
 * @apiSuccess {String}     obj.code            编码
 * @apiSuccess {String}     obj.name            名称
 * @apiSuccess {String}     obj.healthMethod    保健方法
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "name": "足少阴肾经",
 *               "healthMethod": "疏肝理气，和胃降逆。",
 *           },
 *           ...
 *       ]
 *   }
 *
 */
function getDiseaseMeridians() {   return; }


/**
 * @api {get} /DiseaseApi/getDiseaseOrgans 获取疾病相关器管
 * @apiVersion 2.0.0
 * @apiName getDiseaseOrgans
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病相关器管。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseType              问题分类
 * @apiParam {String}  disease                  问题名称
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 相关器管集合
 * @apiSuccess {String}     obj.code            编码
 * @apiSuccess {String}     obj.name            名称
 * @apiSuccess {String}     obj.healthMethod    保健方法
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "name": "大脑",
 *               "healthMethod": "中风最普遍的原因是动脉硬化。动脉硬化会使血液中的脂肪凝结成块，致使动脉血管变窄，血液流通受阻。当输送血液到大脑的动脉被血块阻塞时，血液与氧气就无法顺畅输送到脑细胞，进而引发中风。",
 *           },
 *           ...
 *       ]
 *   }
 *
 */
function getDiseaseOrgans() {   return; }


/**
 * @api {get} /DiseaseApi/getDiseaseCirculatorySystems 获取疾病相关循环系统
 * @apiVersion 2.0.0
 * @apiName getDiseaseCirculatorySystems
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病相关循环系统。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  diseaseType              问题分类
 * @apiParam {String}  disease                  问题名称
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 相关循环系统集合
 * @apiSuccess {String}     obj.code            编码
 * @apiSuccess {String}     obj.name            名称
 * @apiSuccess {String}     obj.healthMethod    保健方法
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "name": "神经系统",
 *               "healthMethod": "由高温液体(例如，沸水、热油)、高温固体(烧热的金属等)或高温蒸气等所致皮肤损伤称为烫伤。",
 *           },
 *           ...
 *       ]
 *   }
 *
 */
function getDiseaseCirculatorySystems() {   return; }