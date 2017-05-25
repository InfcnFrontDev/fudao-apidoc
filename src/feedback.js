/**
 * @api {get} /FeedbackApi/submit 提交意见反馈
 * @apiVersion 2.0.0
 * @apiName submit
 * @apiGroup Feedback
 * @apiPermission login
 *
 * @apiDescription 提交意见反馈。
 *
 * @apiUse AuthenticatedHeader
 *
 * @apiParam {String}       content         内容
 *
 * @apiSuccess {Boolean}    success         是否成功
 *
 * @apiUse AuthenticatedError
 *
 */
function submit() {	return; }