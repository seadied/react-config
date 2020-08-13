import Home from '../component/Home/index.js'
import About from '../component/About/index.js'
import Layout from '../component/Layout/index.js'

export const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                exact: 'exact',
                redirect: '/home'
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/about',
                component: About
            }

        ]
    }
]


// const routes = [
//     {
//       path: '/',
//       redirect: '/cart'
//     },
//     {
//       path: '/cart',
//       com: Cart
//     },
//     {
//      path: '/home',
//      com: Home,
//      children: [
//        {
//          path: '/home',
//          redirect: '/home/index'
//        },
//        {
//          path: '/home/index',
//          com: HomeIndex
//        },
//        {
//          path: '/home/cat',
//          com: HomeCat,
//          children: [
//            {
//              path: '/home/cat',
//              redirect: '/home/cat/tab1'
//            },
//            {
//              path: '/home/cat/tab1',
//              com: CatTab1
//            },
//            {
//              path: '/home/cat/tab2',
//              com: CatTab2,
//            }
//          ]
//        }
//      ]
//    }
//  ]