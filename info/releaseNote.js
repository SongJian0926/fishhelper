const releaseNote = {
  nodes: [{
    name: 'div',
    children: [{
      name: 'h4',
      attrs: {
        style: 'text-align: center;'
      },
      children: [{
        type: 'text',
        text: '更新日志'
      }]
    },
      {
        name: 'div',
        children: [{
          type: 'text',
          text: 'v2.1'
        },
        {
          name: 'ul',
          children: [
            {
              name: 'li',
              attrs: {
                style: 'font-size: 12px;'
              },
              children: [
                {
                  type: 'text',
                  text: '细节优化，修复bug'
                }
              ]
            }
          ]
        }]
      },

    {
      name: 'div',
      children: [{
        type: 'text',
        text: 'v2.0'
      },
      {
        name: 'ul',
        children: [
          {
            name: 'li',
            attrs: {
              style: 'font-size: 12px;'
            },
            children: [
              {
                type: 'text',
                text: '功能新增：问答功能'
              }
            ]
          },
          {
            name: 'li',
            attrs: {
              style: 'font-size: 12px;'
            },
            children: [
              {
                type: 'text',
                text: '百科新增：水草，虎鱼，孔雀鱼，鹦鹉鱼，淡水魟鱼分类'
              }
            ]
          },
          {
            name: 'li',
            attrs: {
              style: 'font-size: 12px;'
            },
            children: [
              {
                type: 'text',
                text: '其它细节优化'
              }
            ]
          }
        ]
      }]
    },

    {
      name: 'div',
      children: [{
        type: 'text',
        text: 'v1.0'
      },
      {
        name: 'ul',
        children: [
          {
            name: 'li',
            attrs: {
              style: 'font-size: 12px;'
            },
            children: [
              {
                type: 'text',
                text: '主功能模块：养鱼百科、帮助、反馈。'
              }
            ]
          },
          {
            name: 'li',
            attrs: {
              style: 'font-size: 12px;'
            },
            children: [
              {
                type: 'text',
                text: '问答功能即将上线，敬请关注。'
              }
            ]
          }
        ]
      }]
    },

    ]
  }]
}

module.exports = releaseNote;