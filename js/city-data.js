angular.module("cityData",[])
.constant('CityData', [
  {
    label: '山西',
    flag: 'cn.png',
    provinces: [
      {
        label: '太原市',
        cities: [
          {
            label: '小店区'
          },
          {
            label: '迎泽区'
          },
          {
            label: '柳巷'
          }
        ]
      },
      {
        label: '阳泉市',
        cities: [
          {
            label: '盂县'
          },
          {
            label: '平定县'
          },
          {
            label: '娘子关'
          }
        ]
      }
    ]
  },
  {
    label: '河北',
    flag: 'us.png',
    provinces: [
      {
        label: '石家庄',
        cities: [
          {
            label: '桥东区'
          },
          {
            label: '桥西区'
          }
        ]
      },
      {
        label: '唐山',
        cities: [
          {
            label: '休斯顿'
          },
          {
            label: '达拉斯'
          }
        ]
      },
      {
        label: '承德'
      }
    ]
  }
]);