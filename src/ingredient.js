/**
 * @api {get} /IngredientApi/getIngredientList 获取食材信息
 * @apiVersion 2.0.0
 * @apiName getIngredientList
 * @apiGroup Ingredient
 * @apiPermission login
 *
 * @apiDescription 获取食材的详细信息。
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} name 		食材名称
 *
 * @apiSuccess {Boolean}    ok               是否成功
 * @apiSuccess {String}     name             食材名称
 * @apiSuccess {String}     otherName        其他的名字
 * @apiSuccess {String}     img              图片
 * @apiSuccess {String}     abstract         摘要
 * @apiSuccess {String}     protein          蛋白质
 * @apiSuccess {String}     fat              脂肪
 * @apiSuccess {String}     carbohydrate     碳水化合物
 * @apiSuccess {String}     dietaryFiber     膳食纤维
 * @apiSuccess {String}     cholesterol      胆固醇


 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "ok": true,
*         "name": "蚕豆",
*         "otherName": "大豆",
*         "img": "ingredien/1.1.jpg",
*         "abstract":"蚕豆有。。的作用。。",
*         "protein": "5.0",
*         "fat": "0.7",
 *         "carbohydrate": "0.8",
 *         "dietaryFiber": "0.9",
 *         "cholesterol": "0.6"
 *      }
 *
 */
function getMyIngredientList() { return; }
