/**
 * @api {get} /SearchApi/searchAll 搜索全部
 * @apiVersion 2.0.0
 * @apiName searchAll
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索全部类别。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		  搜索关键词
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       搜索全部结果
 * @apiSuccess {String}     obj.symptomProblem    症状和问题结果
 * @apiSuccess {String}     obj.friendsCircle     朋友圈动态结果
 * @apiSuccess {String}     obj.dailyMethod       保健方法结果
 * @apiSuccess {String}     obj.information       资讯结果
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "symptomProblem": {
 *                 // 同症状和问题搜索
 *             },
 *             "friendsCircle": {
 *                 // 同朋友圈搜索
 *             },
 *             "dailyMethod": {
 *                 // 同保健方法搜索
 *             },
 *             "information": {
 *                 // 同资讯搜索
 *             },
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchAll() { return; }

/**
 * @api {get} /SearchApi/searchSymptomProblem 搜索症状和问题
 * @apiVersion 2.0.0
 * @apiName searchSymptomProblem
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索症状和问题。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}   obj                   搜索症状和问题结果
 * @apiSuccess {String}     obj.id                问题ID
 * @apiSuccess {String}     obj.name              问题名称
 * @apiSuccess {Number}     obj.page              当前页码
 * @apiSuccess {Number}     obj.pageSize          每页大小
 * @apiSuccess {Number}     obj.pageCount         总页数
 * @apiSuccess {Number}     obj.count             总条数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "list": [
 *                 {
 *                     "id": "1",
 *                     "name": "消化不良"
 *                 },
 *                 {
 *                     "id": "2",
 *                     "name": "慢性疲劳"
 *                 },{
 *                     "id": "3",
 *                     "name": "乳腺囊肿"
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5,
 *             "count": 832
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchSymptomProblem() { return; }

/**
 * @api {get} /SearchApi/searchFriendsCircle 搜索朋友圈
 * @apiVersion 2.0.0
 * @apiName searchFriendsCircle
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索朋友圈
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object[]}   obj                   搜索动态分页结果
 * @apiSuccess {String}     obj.list              动态列表
 * @apiSuccess {String}     obj.list.id           动态ID
 * @apiSuccess {String}     obj.list.userId       动态发表人ID
 * @apiSuccess {String}     obj.list.content      动态内容
 * @apiSuccess {String}     obj.list.createTime   动态发表时间
 * @apiSuccess {String}     obj.list.type         动态资源类型
 * @apiSuccess {String}     obj.list.path         动态资源路径
 * @apiSuccess {Number}     obj.page              当前页码
 * @apiSuccess {Number}     obj.pageSize          每页大小
 * @apiSuccess {Number}     obj.pageCount         总页数
 * @apiSuccess {Number}     obj.count             总条数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "list": [
 *                 {
 *                     "id": "0b766feb157246f9a19589c5d1c71394",
 *                     "userId": "0b766feb157246f9a19589c5d1c71394",
 *                     "content": "和朋友到泰山顶看日出，一个朋友指着天空说：“我看见了！”“我也看见了！”这时远处有人提着裤子出来骂道：“看见就看见呗！你们嚷什么啊！”",
 *                     "createTime": "2017-05-04 14:38:15",
 *                     "type": 1,
 *                     "path": "uploader/00/00/00/00/00/00/00/7F.jpg",
 *                 },
 *                 {
 *                     "id": "0b766feb157246f9a19589c5d1c71394",
 *                     "userId": "0b766feb157246f9a19589c5d1c71394",
 *                     "content": "蚂蚁和大象结婚不久，大象就死了。蚂蚁一边埋大象，一边痛哭：“亲爱的，你怎么这么早去了，我这辈子不干别的，就埋你了！”",
 *                     "createTime": "2017-05-04 14:38:15",
 *                     "type": 1,
 *                     "path": "uploader/00/00/00/00/00/00/00/7F.jpg",
 *                 },
 *                 {
 *                     "id": "0b766feb157246f9a19589c5d1c71394",
 *                     "userId": "0b766feb157246f9a19589c5d1c71394",
 *                     "content": "有个朋友第一次勤工俭学在公园里卖冰棍，不好意思吆喝；这时候突然有一人在那里大喊：“卖冰棍儿~~~~卖冰棍儿~~”。那朋友一听，心里可高兴了，就跟着喊：“我也是~~~~我也是~~~~”。",
 *                     "createTime": "2017-05-04 14:38:15",
 *                     "type": 1,
 *                     "path": "uploader/00/00/00/00/00/00/00/7F.jpg",
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5,
 *             "count": 832
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchFriendsCircle() { return; }

/**
 * @api {get} /SearchApi/searchDailyMethod 搜索保健方法
 * @apiVersion 2.0.0
 * @apiName searchDailyMethod
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索保健方法
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       搜索保健方法结果
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": [
 *           {
 *               "type": "饮食",
 *               "list": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "起居",
 *               "list": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "动",
 *               "list": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "静",
 *               "list": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *           {
 *               "type": "娱乐",
 *               "methods": [
 *                   {
 *                       "id": "36",
 *                       "name": "睡前不要吃东西",
 *                       "timePeriod": "睡前"
 *                   },
 *                   ...
 *               ],
 *               "page": 1,
 *               "pageSize": 10,
 *               "pageCount": 5,
 *               "count": 832
 *           },
 *       ]
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchDailyMethod() { return; }


/**
 * @api {get} /SearchApi/searchTypeDailyMethod 搜索某类保健方法
 * @apiVersion 2.0.0
 * @apiName searchTypeDailyMethod
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索某类保健方法
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} type 		        保健方法分类，（1:起居；2:动；3:静；4:娱乐；5:饮食）
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success   是否成功
 * @apiSuccess {Object[]}   obj       搜索保健方法结果
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "type": "动",
 *             "list": [
 *                 {
 *                     "id": "36",
 *                     "name": "睡前不要吃东西",
 *                     "timePeriod": "睡前"
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5,
 *             "count": 832
 *         },
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchTypeDailyMethod() { return; }

/**
 * @api {get} /SearchApi/searchInformation 搜索资讯
 * @apiVersion 2.0.0
 * @apiName searchInformation
 * @apiGroup Search
 * @apiPermission login
 *
 * @apiDescription 搜索全部类别。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String} keyword 		    搜索关键词
 * @apiParam {Number} [page=1] 		    当前页码
 * @apiParam {Number} [pageSize=10] 	每页大小
 *
 * @apiSuccess {Boolean}    success               是否成功
 * @apiSuccess {Object}     obj                   资讯列表分页
 * @apiSuccess {Object[]}   obj.list              资讯列表
 * @apiSuccess {String}     obj.list.id           ID
 * @apiSuccess {String}     obj.list.title        标题
 * @apiSuccess {String}     obj.list.img          图片
 * @apiSuccess {String}     obj.list.source       来源
 * @apiSuccess {Number}     obj.list.createTime   发表时间
 * @apiSuccess {Number}     obj.page              当前页码
 * @apiSuccess {Number}     obj.pageSize          每页大小
 * @apiSuccess {Number}     obj.pageCount         总页数
 * @apiSuccess {Number}     obj.count             总条数
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "list": [
 *                 {
 *                     "id": "1106775f-0d7d-11e7-9b59-000c293e6828",
 *                     "title": "食物中的10大“黄金搭档”",
 *                     "img": "zixun/1.1.jpg,zixun/1.2.jpg,zixun/1.3.jpg",
 *                     "source": "养生堂",
 *                     "createTime": 1460651070000,
 *                 },
 *                 {
 *                     "id": "1106775f-0d7d-11e7-9b59-000c293e6828",
 *                     "title": "日用品过期会引来一身病，99%的人不知道！ ",
 *                     "img": "zixun/2.1.jpg,zixun/2.2.jpg,zixun/2.3.jpg",
 *                     "source": "养生堂",
 *                     "createTime": 1460651070000,
 *                 },
 *                 ...
 *             ],
 *             "page": 1,
 *             "pageSize": 10,
 *             "pageCount": 5,
 *             "count": 832
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function searchInformation() { return; }