import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    cards: [
      {
        id: 2,
        title: '宜春',
        coverUrl: require('./assets/boston.png'),
        location: {
          lat: '江西省',
          lng: '宜春市'
        },
        address: '江西宜春官员路',
        postcode: 'NO. 7911847',
        star: 4,
        posts: [
          {
            id: 3,
            name: '小新',
            faceUrl: require('./assets/wx04.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          },
          {
            id: 4,
            name: '梅溪湖雅',
            faceUrl: require('./assets/wx01.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          }
        ],
        active: false
      },
      {
        id: 1,
        title: '萍乡',
        coverUrl: require('./assets/san_francisco.png'),
        location: {
          lat: '江西省',
          lng: '萍乡市'
        },
        address: '江西省萍乡市芦溪县',
        postcode: 'NO. 7911847',
        star: 3,
        posts: [
          {
            id: 1,
            name: '以情',
            faceUrl: require('./assets/wx02.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          },
          {
            id: 2,
            name: 'Peter Allen',
            faceUrl: require('./assets/wx03.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          }
        ],
        active: false
      },
      {
        id: 3,
        title: '南昌',
        coverUrl: require('./assets/washington.png'),
        location: {
          lat: '江西省',
          lng: '南昌市'
        },
        address: '江西省南昌市八一广场',
        postcode: 'NO. 7911847',
        star: 4,
        posts: [
          {
            id: 5,
            name: 'Lin先生',
            faceUrl: require('./assets/wx09.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          },
          {
            id: 6,
            name: '流年似水',
            faceUrl: require('./assets/wx05.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          }
        ],
        active: false
      },
      {
        id: 4,
        title: '上饶',
        coverUrl: require('./assets/new_york.png'),
        location: {
          lat: '江西省',
          lng: '上饶市'
        },
        address: '江西省上饶市',
        postcode: 'NO. 7911847',
        star: 4,
        posts: [
          {
            id: 7,
            name: '汤包一秀',
            faceUrl: require('./assets/wx07.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          },
          {
            id: 8,
            name: '开心',
            faceUrl: require('./assets/wx06.png'),
            date: new Date(),
            content:
              '宜春市好生活家政服务有限公司：是宜春本地老品牌，服务第一．价格实在。专业：搬家，搬运，搬廠，搬公司，搬办公大樓，医院，学校，钢琴，空调，維修，保洁等各种家政服務。'
          }
        ],
        active: false
      }
    ],

    selected: null,
    unselect: null
  },
  mutations: {
    toggleCard (state, { card }) {
      if (state.selected && state.selected.card === card) {
        return
      }
      card.active = !card.active
    },
    nextCard (state) {
      if (state.selected) {
        return
      }
      state.cards.forEach(card => {
        card.active = false
      })
      state.currentIndex++
    },
    prevCard (state) {
      if (state.selected) {
        return
      }
      state.cards.forEach(card => {
        card.active = false
      })
      state.currentIndex--
    },
    selectCard (state, selected) {
      state.unselect = null
      state.selected = selected
    },
    unselectCard (state) {
      state.unselect = state.selected
      state.selected = null
    }
  },
  actions: {}
})
