/**
 * @api {get} /IngredientApi/getIngredient 获取食材详细
 * @apiVersion 2.0.0
 * @apiName getIngredient
 * @apiGroup Ingredient
 * @apiPermission login
 *
 * @apiDescription 根据食材名称，获取食材的详细。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       idOrName 		食材ID或名称
 *
 * @apiSuccess {Boolean}    ok                   是否成功
 * @apiSuccess {Object}     obj                  食材对象
 * @apiSuccess {String}     obj.id               ID
 * @apiSuccess {String}     obj.name             名称
 * @apiSuccess {String}     obj.otherName        其他的名字
 * @apiSuccess {String}     obj.img              图片
 * @apiSuccess {String}     obj.abstract         摘要
 * @apiSuccess {String}     obj.energy           能量
 * @apiSuccess {String}     obj.protein          蛋白质
 * @apiSuccess {String}     obj.fat              脂肪
 * @apiSuccess {String}     obj.carbohydrate     碳水化合物
 * @apiSuccess {String}     obj.dietaryFiber     膳食纤维
 * @apiSuccess {String}     obj.cholesterol      胆固醇
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
 *         "obj": {
 *             "id": "11081c38-0d7d-11e7-9b59-000c293e6828",
 *             "name": "蚕豆",
 *             "otherName": "大豆",
 *             "img": "ingredien/1.1.jpg",
 *             "abstract":"蚕豆有。。的作用。。",
 *             "energy": "1.3",
 *             "protein": "5.0",
 *             "fat": "0.7",
 *             "carbohydrate": "0.8",
 *             "dietaryFiber": "0.9",
 *             "cholesterol": "0.6"
 *         }
 *     }
 *
 * @apiUse AuthenticatedError
 *
 */
function getIngredient() { return; }
