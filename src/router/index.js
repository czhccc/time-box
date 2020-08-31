import Vue from 'vue'
import VueRouter from 'vue-router'

const Bind = () => import('../views/bind/Bind.vue')
const Peizhiquanzi = () => import('../views/bind/childComps/Peizhiquanzi.vue')

const Find = () => import('../views/find/Find.vue')
const Tianjiaquanzi = () => import('../views/find/childComps/Tianjiaquanzi.vue')
const Wodequanzi = () => import('../views/find/childComps/Wodequanzi.vue')
const Wodebaobao = () => import('../views/find/childComps/Wodebaobao.vue')
const Tianxiejibenxinxi = () => import('../views/find/childComps/Tianxiejibenxinxi.vue')
const Shangchuantouxiang = () => import('../views/find/childComps/Shangchuantouxiang.vue')
const Shengmingjinggao = () => import('../views/find/childComps/Shengmingjinggao.vue')
const Xiugaibaobaoxingming = () => import('../views/find/childComps/Xiugaibaobaoxingming.vue')
const Tujixiangqing = () => import('../views/find/childComps/Tujixiangqing.vue')
const Tupianliulan = () => import('../views/find/childComps/Tupianliulan.vue')

const Upload = () => import('../views/upload/Upload.vue')
const Shangchuan = () => import('../views/upload/childComps/shangchuan/Shangchuan.vue')
const Tongji = () => import('../views/upload/childComps/tongji/Tongji.vue')

const Photo = () => import('../views/photo/Photo.vue')
const Huodongxiangqing = () => import('../views/photo/childComps/Huodongxiangqing.vue')
const Xiangcemuban = () => import('../views/photo/childComps/Xiangcemuban.vue')
const Mubanxiangqing = () => import('../views/photo/childComps/Mubanxiangqing.vue')
const Mubanyulan = () => import('../views/photo/childComps/Mubanyulan.vue')
const Xiangceliebiao = () => import('../views/photo/childComps/Xiangceliebiao.vue')
const Xuanzemuban = () => import('../views/photo/childComps/Xuanzemuban.vue')
const Shezhixiangcemingcheng = () => import('../views/photo/childComps/Shezhixiangcemingcheng.vue')
const Xiangcebianji = () => import('../views/photo/childComps/Xiangcebianji.vue')
const Xuanzetupian = () => import('../views/photo/childComps/Xuanzetupian.vue')
const Querendingdan = () => import('../views/photo/childComps/Querendingdan.vue')
const Xiangcexiangqing = () => import('../views/photo/childComps/Xiangcexiangqing.vue')

const Profile = () => import('../views/profile/Profile.vue')
const Qianbaozonge = () => import('../views/profile/childComps/listView/Qianbaozonge.vue')
const QianbaozongeTixian = () => import('../views/profile/childComps/listView/QianbaozongeTixian.vue')
const QianbaozongeChongzhi = () => import('../views/profile/childComps/listView/QianbaozongeChongzhi.vue')
const QianbaozongeDetail = () => import('../views/profile/childComps/listView/QianbaozongeDetail.vue')
const Wodejifen = () => import('../views/profile/childComps/listView/Wodejifen.vue')
const WodejifenGuize = () => import('../views/profile/childComps/listView/WodejifenGuize.vue')
const WodejifenChongzhi = () => import('../views/profile/childComps/listView/WodejifenChongzhi.vue')
const Jibenxinxi = () => import('../views/profile/childComps/listView/Jibenxinxi.vue')
const Shouhuodizhi = () => import('../views/profile/childComps/listView/Shouhuodizhi.vue')
const ShouhuodizhiBianji = () => import('../views/profile/childComps/listView/ShouhuodizhiBianji.vue')
const Huiyuanzhongxin = () => import('../views/profile/childComps/listView/Huiyuanzhongxin.vue')
const Wodedingdan = () => import('../views/profile/childComps/listView/Wodedingdan.vue')
const WodedingdanDetail = () => import('../views/profile/childComps/listView/WodedingdanDetail.vue')
const Yonghufankui = () => import('../views/profile/childComps/listView/Yonghufankui.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/bind',
  },
  {
    path: '/bind',
    component: Bind,
  },
  {
    path: '/bind/peizhiquanzi',
    component: Peizhiquanzi,
  },
  {
    path: '/find',
    component: Find,
    meta: { 
      notTabBar: true
    }
  },
  {
    path: '/find/tianjiaquanzi',
    component: Tianjiaquanzi,
  },
  {
    path: '/find/wodequanzi',
    component: Wodequanzi,
  },
  {
    path: '/find/wodebaobao',
    component: Wodebaobao,
  },
  {
    path: '/find/tianxiejibenxinxi',
    component: Tianxiejibenxinxi,
  },
  {
    path: '/find/shangchuantouxiang',
    component: Shangchuantouxiang,
  },
  {
    path: '/find/shengmingjinggao',
    component: Shengmingjinggao,
  },
  {
    path: '/find/xiugaibaobaoxingming',
    component: Xiugaibaobaoxingming,
  },
  {
    path: '/find/tujixiangqing',
    component: Tujixiangqing,
  },
  {
    path: '/find/tupianliulan',
    component: Tupianliulan,
  },
  {
    path: '/upload',
    component: Upload,
    meta: { 
      notTabBar: true
    }
  },
  {
    path: '/upload/shangchuan',
    component: Shangchuan,
  },
  {
    path: '/upload/tongji',
    component: Tongji,
  },
  {
    path: '/photo',
    component: Photo,
    meta: { 
      notTabBar: true
    }
  },
  {
    path: '/photo/huodongxiangqing',
    component: Huodongxiangqing,
  },
  {
    path: '/photo/xiangcemuban',
    component: Xiangcemuban,
  },
  {
    path: '/photo/mubanxiangqing',
    component: Mubanxiangqing,
  },
  {
    path: '/photo/mubanyulan',
    component: Mubanyulan,
  },
  {
    path: '/photo/xiangceliebiao',
    component: Xiangceliebiao,
  },
  {
    path: '/photo/xuanzemuban',
    component: Xuanzemuban,
  },
  {
    path: '/photo/shezhixiangcemingcheng',
    component: Shezhixiangcemingcheng,
  },
  {
    path: '/photo/xiangcebianji',
    component: Xiangcebianji,
  },
  {
    path: '/photo/xuanzetupian',
    component: Xuanzetupian,
  },
  {
    path: '/photo/querendingdan',
    component: Querendingdan,
  },
  {
    path: '/photo/xiangcexiangqing',
    component: Xiangcexiangqing,
  },
  {
    path: '/profile',
    component: Profile,
    meta: { 
      notTabBar: true
    }
  },
  {
    path: '/profile/qianbaozonge',
    component: Qianbaozonge,
  },
  {
    path: '/profile/qianbaozonge/tixian',
    component: QianbaozongeTixian,
  },
  {
    path: '/profile/qianbaozonge/chongzhi',
    component: QianbaozongeChongzhi,
  },
  {
    path: '/profile/qianbaozonge/detail',
    component: QianbaozongeDetail,
  },
  {
    path: '/profile/wodejifen',
    component: Wodejifen,
  },
  {
    path: '/profile/wodejifen/guize',
    component: WodejifenGuize,
  },
  {
    path: '/profile/wodejifen/chongzhi',
    component: WodejifenChongzhi,
  },
  {
    path: '/profile/jibenxinxi',
    component: Jibenxinxi,
  },
  {
    path: '/profile/shouhuodizhi',
    component: Shouhuodizhi,
  },
  {
    path: '/profile/shouhuodizhi/bianji',
    component: ShouhuodizhiBianji,
  },
  {
    path: '/profile/huiyuanzhongxin',
    component: Huiyuanzhongxin,
  },
  {
    path: '/profile/wodedingdan',
    component: Wodedingdan,
  },
  {
    path: '/profile/wodedingdan/detail',
    component: WodedingdanDetail,
  },
  {
    path: '/profile/yonghufankui',
    component: Yonghufankui,
  },
  
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router