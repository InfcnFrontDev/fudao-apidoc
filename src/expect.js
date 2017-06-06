/**
 * @api {get} /ExpectApi/getAllExpectList 获取全部期望列表
 * @apiVersion 2.0.0
 * @apiName getAllExpectList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取所有期望列表（适合于当前用户人群）
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok         是否成功
 * @apiSuccess {Object[]}   obj             期望列表
 * @apiSuccess {String}     obj.id          期望ID
 * @apiSuccess {String}     obj.name        期望名称
 * @apiSuccess {String}     obj.img         期望图片
 * @apiSuccess {String}     obj.type        期望类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *               "id": "dc36f1c5-1488-11e7-9b59-000c293e6828",
 *               "name": "跌倒",
 *               "img": "/icons/zixiu/jianfeisuxing.png",
 *               "type": "减肥塑形",
 *           },
 *           ...
 *       ]
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getAllExpectList() {   return; }


/**
 * @api {get} /ExpectApi/getMyExpectList 获取我的期望列表
 * @apiVersion 2.0.0
 * @apiName getMyExpectList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取我的期望项目列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             自修类型列表
 * @apiSuccess {String}     obj.id          自修ID
 * @apiSuccess {String}     obj.name        自修名称
 * @apiSuccess {String}     obj.img         自修图片
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok": true,
 *       "obj": [
 *           {
 *             "id": "dc36f1c5-1488-11e7-9b59-000c293e6828",
 *             "img": "/icons/zixiu/jianfeisuxing.png",
 *             "name": "减肥塑形",
 *           },
 *           ...
 *       ]
 *   }
 *
 */
function getMyExpectList() {   return; }

/**
 * @api {get} /ExpectApi/addMyExpect 添加我的期望
 * @apiVersion 2.0.0
 * @apiName addMyExpect
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  添加我的期望
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expectId   期望ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function addMyExpect() {   return; }

/**
 * @api {get} /ExpectApi/deleteMyExpect 删除我的期望
 * @apiVersion 2.0.0
 * @apiName deleteMyExpect
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  删除我的期望
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       expectId   期望项目ID
 *
 * @apiSuccess {Boolean}    ok         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function deleteMyExpect() {   return; }


/**
 * @api {get} /ExpectApi/getExpectDailyMethodList 获取期望日常疗法列表
 * @apiVersion 2.0.0
 * @apiName getExpectDailyMethodList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  根据期望，获取该期望的日常疗法列表（适合于当前用户人群）
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expectId         期望ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object[]}   obj             期望的日常疗法列表
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
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "动",
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "静",
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ]
 *           },
 *           {
 *               "type": "娱乐",
 *               "principle": "粗盐有发汗的作用，它可以排出体内的废物和多余的水分，促进皮肤的新陈代谢，还可以软化污垢、补充盐分和矿物质，使肌肤细致、紧绷。"
 *               "methods": [
 *                   {
 *                       "id": "543f81e4-14ad-11e7-9b59-000c293e6828",
 *                       "name": "粗盐减肥法",
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
function getExpectDailyMethodList() {   return; }

/**
 * @api {get} /ExpectApi/getExpectDailyMethodDetail 获取期望日常疗法详情
 * @apiVersion 2.0.0
 * @apiName getExpectDailyMethodDetail
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取期望日常疗法详情
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       id               期望日常疗法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             期望的日常疗法方法详情
 * @apiSuccess {String}     obj.id                        方法ID
 * @apiSuccess {String}     obj.name                      方法名称
 * @apiSuccess {String}     obj.threeCharacterClassic     方法三字经
 * @apiSuccess {String}     obj.img                       方法附件：图片/音频/视频
 * @apiSuccess {String}     obj.detail                    方法详情
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 * {
 *      "ok":true,
 *      "obj": {
 *         "id": "192341l34-193479132lfhqdew7f-9asdf91234",
 *         "name": "粗盐减肥法",
 *         "threeCharacterClassic": "用粗盐，可减肥，拍废物，促代谢。",
 *         "img": "/photo/cuyan.jpg",
 *         "detail": "1、每次洗澡前，取一杯粗盐加上少许热水拌成糊状，再把它涂在腹部。\n\t2、10分钟后，用热水把粗盐冲洗干净，也可以按摩后再冲掉，...",
 *     }
 * }
 *
 * @apiUse AuthenticatedError
 *
 */
function getExpectDailyMethodDetail() {   return; }

/**
 * @api {get} /ExpectApi/getExpectProfessionalMethodList 获取期望专业疗法列表
 * @apiVersion 2.0.0
 * @apiName getExpectProfessionalMethodList
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  根据期望，获取该期望的专业疗法列表
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       expectId               期望ID
 *
 * @apiSuccess {Boolean}    ok                     是否成功
 * @apiSuccess {Object}     obj                    期望的专业疗法列表
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
 *               id: "ff5d9908-149b-11e7-9b59-000c293e6828",
 *               name: "茉莉花茶",
 *               type: "药用奇方",
 *           },
 *           ...
 *      ]
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getExpectProfessionalMethodList() {   return; }

/**
 * @api {get} /ExpectApi/getExpectProfessionalMethodDetail 获取期望专业疗法详情
 * @apiVersion 2.0.0
 * @apiName getExpectProfessionalMethodDetail
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取期望专业疗法详情
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}   id         专业疗法ID
 *
 * @apiSuccess {Boolean}    ok              是否成功
 * @apiSuccess {Object}     obj             期望的专业疗法方法详情
 * @apiSuccess {String}     obj.id                 方法ID
 * @apiSuccess {String}     obj.name               方法名称
 * @apiSuccess {String}     obj.material           方法原料
 * @apiSuccess {String}     obj.makingMethod       方法制作方法
 * @apiSuccess {String}     obj.usageMethod        方法使用方法
 * @apiSuccess {String}     obj.type               方法类型
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "ok":true,
 *       "obj": {
 *           "id": "46ads1f3-asd4f6ads4f3asd1fa3-sd2f1as3df",
 *           "name": "茉莉花茶",
 *           "material": "茉莉花10克，玫瑰花10克，荷叶10克，草决明10克，枳壳10克，泽兰12克，泽泻12克，桑葚15克，补骨脂15克，何首乌15克。",
 *           "makingMethod": "上药用水煎。",
 *           "usageMethod": "\t每日1剂，每剂分2次代茶饮。"
 *           "type": "药用奇方",
 *       }
 *   }
 *
 * @apiUse AuthenticatedError
 *
 */
function getExpectProfessionalMethodDetail() {   return; }



/**
 * @api {get} /ExpectApi/getExpectRelevant 获取自修相关
 * @apiVersion 2.0.0
 * @apiName getExpectRelevant
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取自修相关数据，包括经线、穴位、部位、循环系统。数据区分人群。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expect                  自修项目
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                 问题详情
 * @apiSuccess {String}     obj.meridians                  相关经络
 * @apiSuccess {String}     obj.meridians.name                经络名称
 * @apiSuccess {String}     obj.meridians.correlativity       经络相关关系
 * @apiSuccess {String}     obj.meridians.list                经络路径列表
 * @apiSuccess {String}     obj.meridians.list.code              路径编码
 * @apiSuccess {String}     obj.meridians.list.map               路径地图
 *
 * @apiSuccess {String}     obj.acupoints                  相关穴位
 * @apiSuccess {String}     obj.acupoints.name                穴位名称
 * @apiSuccess {String}     obj.acupoints.correlativity       穴位相关关系
 * @apiSuccess {String}     obj.acupoints.list                穴位路径列表
 * @apiSuccess {String}     obj.acupoints.list.code              路径编码
 * @apiSuccess {String}     obj.acupoints.list.map               路径地图
 *
 * @apiSuccess {String}     obj.organs                  相关器官
 * @apiSuccess {String}     obj.organs.name                器官名称
 * @apiSuccess {String}     obj.organs.correlativity       器官相关关系
 * @apiSuccess {String}     obj.organs.list                器官路径列表
 * @apiSuccess {String}     obj.organs.list.code              路径编码
 * @apiSuccess {String}     obj.organs.list.map               路径地图

 * @apiSuccess {String}     obj.circulatorySystems                  相关循环系统
 * @apiSuccess {String}     obj.circulatorySystems.name                循环系统名称
 * @apiSuccess {String}     obj.circulatorySystems.correlativity       循环系统相关关系
 * @apiSuccess {String}     obj.circulatorySystems.list                循环系统路径列表
 * @apiSuccess {String}     obj.circulatorySystems.list.code              路径编码
 * @apiSuccess {String}     obj.circulatorySystems.list.map               路径地图
 *
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
function getExpectRelevant() {   return; }

/**
 * @api {get} /ExpectApi/getExpectAcupoints 获取自修相关穴位
 * @apiVersion 2.0.0
 * @apiName getExpectAcupoints
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取自修相关穴位。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expect                  自修项目
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object}     obj                 相关穴位集合
 * @apiSuccess {String}     obj.name                      穴位名称
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
function getExpectAcupoints() {   return; }


/**
 * @api {get} /ExpectApi/getExpectMeridians 获取自修相关经络
 * @apiVersion 2.0.0
 * @apiName getExpectMeridians
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取自修相关经络。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expect                  自修项目
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 相关经络集合
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
function getExpectMeridians() {   return; }


/**
 * @api {get} /ExpectApi/getExpectOrgans 获取自修相关器管
 * @apiVersion 2.0.0
 * @apiName getExpectOrgans
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取自修相关器管。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expect                  自修项目
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 相关器管集合
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
function getExpectOrgans() {   return; }


/**
 * @api {get} /ExpectApi/getExpectCirculatorySystems 获取自修相关循环系统
 * @apiVersion 2.0.0
 * @apiName getExpectCirculatorySystems
 * @apiGroup Expect
 * @apiPermission login
 *
 * @apiDescription  获取自修相关循环系统。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}  expect                  自修项目
 *
 * @apiSuccess {Boolean}    ok                  是否成功
 * @apiSuccess {Object[]}   obj                 相关循环系统集合
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
function getExpectCirculatorySystems() {   return; }