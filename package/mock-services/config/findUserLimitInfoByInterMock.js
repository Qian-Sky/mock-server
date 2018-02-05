/**
 * Created by LiQian on 17/11/10.
 */

exports.findUserLimitInfoByInterMock = {
  'httpRequest': {
    'method': 'POST',
    'path': '/api/v1/findUserLimitInfo'

  },
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({
      "code":200,
      "message":"获取个人额度信息",
      "result":[
        {
          "availableLimit":0,
          "channelCode":"qianzhan",
          "createTime":"2017-10-16T11:23:03.000Z",
          "displayLimit":10000,
          "frozenLimit":0,
          "id":239817,
          "riskLimit":10000,
          "unrepayLimit":0,
          "updateTime":"2017-10-25T12:04:49.000Z",
          "userId":1100994162
        }
      ]
    })
  },
  'times': {
    'remainingTimes': 1,
    'unlimited': true
  }
};