'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('user')
	const res = await collection.where({
	    _id:event._id 
	}).update({
	  // 将students内id为001的name改为li
	    lover_id: event.lover_id
	})
	//返回数据给客户端
	return res
};
