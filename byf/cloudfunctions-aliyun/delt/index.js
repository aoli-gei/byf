'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('ticket')
	let res = await collection.where(dbCmd.or(
	{
		from_id:event.from_id
	},
	{
		to_id:event.to_id
	}
	)).remove()
	//返回数据给客户端
	return res
};
