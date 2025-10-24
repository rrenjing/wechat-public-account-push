/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx55bf6ee256b8c15f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1046ab6b3e9084ae77b40c535009c3ac',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝','宝宝1'
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okzCc2HXEj-qCDGHfxbKCOEZiVog','okzCc2EW3Z-bEpQNuN8CWfYyJFSo'
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'S74Moi7tcaAWkB81R5IlgfZs8DEjMMuDbi9VvqVJwj0','S74Moi7tcaAWkB81R5IlgfZs8DEjMMuDbi9VvqVJwj0'
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
       
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '2002', date: '10-14',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2025', date: '02-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      CUSTOMIZED_DATE_LIST: [
        // 归来日
        { keyword: 'ex_date', date: '2026-09-01' },
        // 结婚纪念日
        { keyword: 'love_day', date: '2026-09-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '1ArNF3TpPaZG0ZuYbIDiAbwo_o9hn3ntfBjtOdtcLmg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okzCc2MltIHj1jvIAN7ardro2REU',
    }
  ],

}

module.exports = USER_CONFIG

