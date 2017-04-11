/**
 * @api {get} /MedicalExaminationApi/updataMedicalInformation 更新体检信息
 * @apiVersion 2.0.0
 * @apiName updataMedicalInformation
 * @apiGroup MedicalExamination
 * @apiPermission login
 *
 * @apiDescription 更新体检信息
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} jsonStr  修改后的josn数据如{'体重指数':'低','体重':'60',...}
 *
 * @apiSuccess {Boolean}    ok          是否成功
 * @apiSuccess {object[]}    obj             信息
 * @apiSuccess {String}  obj.typeName             分类名称
 * @apiSuccess {object[]}  obj.typeItems             分类力列表
 * @apiSuccess {String}    obj.typeItems.name          名称
 * @apiSuccess {String}    obj.typeItems.medicalExaminationTypeId          分类ID
 * @apiSuccess {String}    obj.typeItems.type          输入类型，1：数值型，2：文本型，3：选择型，4：A/B型
 * @apiSuccess {String}    obj.typeItems.nuit          单位
 * @apiSuccess {String}    obj.typeItems.orderNum      排序号
 * @apiSuccess {String}    obj.typeItems.value         选项值
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj":[
 *             {
 *                 "typeName":'基本信息'
 *                 "typeItems":[
 *                    {
 *                         "name":'体重指数',
 *                         "medicalExaminationTypeId":'ebb8bd60-0f0f-11e7-9b59-000c293e6828',
 *                         "type":'数值型',
 *                         "nuit":'升'，
 *                         "orderNum":55,
 *                         "value":'低'
 *                    },
 *                    ...
 *                 ]
 *             }
 *             ...
 *         ]
 *     }
 */


function updataMedicalInformation() { return; }

/**
 * @api {get} /MedicalExaminationApi/getMedicalInformation 获取体检信息
 * @apiVersion 2.0.0
 * @apiName getMedicalInformation
 * @apiGroup MedicalExamination
 * @apiPermission login
 *
 * @apiDescription 获取用户体检信息
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} appID  当前登录用户的ID
 *
 * @apiSuccess {Boolean}    ok          是否成功
 * @apiSuccess {object[]}   obj             信息
 * @apiSuccess {String}    obj.name          名称
 * @apiSuccess {String}    obj.medicalExaminationTypeId          分类ID
 * @apiSuccess {String}    obj.type          输入类型，1：数值型，2：文本型，3：选择型，4：A/B型
 * @apiSuccess {String}    obj.nuit          单位
 * @apiSuccess {String}    obj.orderNum      排序号
 * @apiSuccess {String}    obj.value         选项值
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200 OK
 *     {
 *         "ok":true,
 *         "obj":[
 *             {
 *                 "name":'体重指数',
 *                 "medicalExaminationTypeId":'ebb8bd60-0f0f-11e7-9b59-000c293e6828',
 *                 "type":'数值型',
 *                 "nuit":'升'，
 *                 "orderNum":55,
 *                 "value":'低'
 *             },
 *             ...
 *         ]
 *     }
 */
function getMedicalInformation() { return; }
/**
 * @api {get} /MedicalExaminationApi/getMedicalExamination 获取体检项
 * @apiVersion 2.0.0
 * @apiName getMedicalExamination
 * @apiGroup MedicalExamination
 * @apiPermission login
 *
 * @apiDescription 获取体检项
 *
 * @apiHeader {String} access-key Users unique access-key.
 *
 * @apiParam {String} appID  当前登录用户的ID
 *
 * @apiSuccess {Boolean}    ok          是否成功
 * @apiSuccess {object[]}   obj             信息
 * @apiSuccess {String}    obj.name          名称
 * @apiSuccess {String}    obj.medicalExaminationTypeId          分类ID
 * @apiSuccess {String}    obj.type          输入类型，1：数值型，2：文本型，3：选择型，4：A/B型
 * @apiSuccess {String}    obj.nuit          单位
 * @apiSuccess {String}    obj.orderNum      排序号
 * @apiSuccess {String}    [obj.items]         选项
 *
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 200  OK
 *     {
 *         "ok":true,
 *         "obj":[
 *             {
 *                 "name":'体重指数',
 *                 "medicalExaminationTypeId":'ebb8bd60-0f0f-11e7-9b59-000c293e6828',
 *                 "type":'数值型',
 *                 "nuit":'升'，
 *                 "orderNum":55,
 *                 "items":['低','中','高']
 *
 *             },
 *             ...
 *         ]
 *     }
 */



function getMedicalExamination() { return; }