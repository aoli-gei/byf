'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('user')
	const res = await collection.where({
	    _id:event._id 
	}).update({
	    lover_id: '',
		create_time:Date.now()
	})
	const res1 = await collection.where({
	    _id:event.lover_id
	}).update({
	    lover_id: '',
		create_time:Date.now()
	})
	//返回数据给客户端
	console.log("res: ",res)
	return res
};
