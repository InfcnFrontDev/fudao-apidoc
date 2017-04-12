/**
 * @api {get} /DiseaseApi/getDiseaseList 获取疾病列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  根据人群ID查询疾病列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  crowd            人群ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj             疾病列表
 * @apiSuccess {String}     obj.id              疾病ID
 * @apiSuccess {String}     obj.name            疾病名称
 * @apiSuccess {String}     obj.title           疾病显示名称
 * @apiSuccess {String}     obj.img             疾病图片
 * @apiSuccess {String}     obj.type            疾病类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "ok": true,
        "obj": [
            {
                "id": "17",
                "name": "跌倒",
                "title": "跌倒",
                "img": "/icons/disease/diedao.png",
                "type": "意外伤害",
            },
            ...
        ]
    }
 */
function getDiseaseList() {   return; }

/**
 * @api {get} /DiseaseApi/getMyDisease 获取我的疾病
 * @apiVersion 2.0.0
 * @apiName getMyDisease
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取我的疾病
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             疾病类型列表
 * @apiSuccess {String}     obj.id                  疾病ID
 * @apiSuccess {String}     obj.name                疾病名称
 * @apiSuccess {String}     obj.title               疾病显示名称
 * @apiSuccess {String}     obj.img                 疾病图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "ok": true,
        "obj": [
            {
                "id": "17",
                "name": "跌倒",
                "title": "跌倒",
                "img": "/icons/disease/diedao.png",
            },
            ...
        ],
    }
 *
 */
function getMyDisease() {   return; }

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
 */
function deleteMyDisease() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseDailyMethodsList 获取疾病日常疗法列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseDailyMethodsList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病日常疗法列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  crowd            人群ID
 * @apiParam {String}  diseaseId        疾病ID
 * @apiParam {String}  regionId         地区ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             疾病的日常疗法列表
 * @apiSuccess {String}     obj.type            日常疗法的类型名称
 * @apiSuccess {Object}     obj.suitable        日常疗法的饮食类型的宜食
 * @apiSuccess {Object}     obj.fasting         日常疗法的饮食类型的禁食
 * @apiSuccess {Object[]}   obj.methods         日常疗法的各阶段饮食或方法列表
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
 */
function getDiseaseDailyMethodsList() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseDailyMethodDetail 获取疾病日常疗法详情
 * @apiVersion 2.0.0
 * @apiName getDiseaseDailyMethodDetail
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病日常疗法详情
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}   id         方法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             疾病的日常疗法方法详情
 * @apiSuccess {String}     obj.name                      方法名称
 * @apiSuccess {String}     obj.img                       方法附件：图片/音频/视频
 * @apiSuccess {String}     obj.threeCharacterClassic     方法三字经
 * @apiSuccess {String}     obj.details                   方法详情
 * @apiSuccess {String}     obj.timePeriod                方法适用时段
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 * {
 *      "ok":true,
 *      "obj": {
          "name": "睡前不要吃东西",
          "img": "/photo/shuiqianbuchidongxi.jpg",
          "threeCharacterClassic":"用粗盐，可减肥，拍废物，促代谢。",
          "details": "1、晚餐最好是睡前4个小时吃。除了晚餐，最好不要吃夜宵。\n2、睡前大吃大喝向来是减肥的大忌，水也要少喝。\n3、除此之外，一些坏习惯也要改改，比如上网看电视时喜欢吃东西，这是很容易堆积脂肪的，而且入睡前吃掉太多东西，很容易让人兴奋，更加不容易睡眠，这会直接影响到睡眠减肥的效果哦!",
          "timePeriod": "睡前"
      }
 * }
 *
 */
function getDiseaseDailyMethodDetail() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseProfessionalMethodsList 获取疾病专业疗法列表
 * @apiVersion 2.0.0
 * @apiName getDiseaseProfessionalMethodsList
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病专业疗法列表
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}  crowd            人群ID
 * @apiParam {String}  diseaseId        疾病ID
 * @apiParam {String}  regionId         地区ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             疾病的专业疗法列表
 * @apiSuccess {String}     obj.id                 专业疗法方法ID
 * @apiSuccess {String}     obj.name               专业疗法方法名称
 * @apiSuccess {String}     obj.type               专业疗法方法所属类型
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
 */
function getDiseaseProfessionalMethodsList() {   return; }

/**
 * @api {get} /DiseaseApi/getDiseaseProfessionalMethodDetail 获取疾病专业疗法详情
 * @apiVersion 2.0.0
 * @apiName getDiseaseProfessionalMethodDetail
 * @apiGroup Disease
 * @apiPermission login
 *
 * @apiDescription  获取疾病专业疗法详情
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String}   id         专业疗法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             疾病的专业疗法方法详情
 * @apiSuccess {String}     obj.name           方法名称
 * @apiSuccess {String}     obj.details        方法详情
 * @apiSuccess {String}     obj.type           方法类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok":true,
 *      "obj": {
          "name": "拔罐疗法",
          "details": "取穴：中脘、三阴交、天枢、巨阙、大横、腹结。\n操作：每次选用4-5穴，根据患者肥胖程度选用大号或中号火罐，以闪火法拔罐，留罐10-20min，每日1次，15次为1个疗程。",
          "type": "拔罐"
       }
 *   }
 *
 */
function getDiseaseProfessionalMethodDetail() {   return; }
