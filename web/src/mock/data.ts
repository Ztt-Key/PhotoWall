import Mock from 'mockjs'

export const data = Mock.mock({
    'list|10': [{
        'moment': new Date(),
        'id|+1': 1,
        'userid|+1': 10, 
        'message|24-96': '@cword',
        'label|0-9': 0,
        'name': '@cname',
        'like|0-20': 0,
        'comment|0-20': 1,
        'imgurl|0-4': '@image(200x100,@color)',
        'revoke|0-20': 0,
        'report|0-20': 0,
    }]
}) 