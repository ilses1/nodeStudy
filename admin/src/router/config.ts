import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd.vue'
import UserList from '../views/user-manage/UserList.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import NewsEdit from '../views/news-manage/NewsEdit.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import ProductEdit from '../views/product-manage/ProductEdit.vue'
import NotFound from '../views/notfound/NotFound.vue'
const routes = [
    {
        path: "/index",
        component: Home,
        meta: { title: '主页' }

    },
    {
        path: "/center",
        component: Center,
        meta: {
            title: '个人中心'
        }
    },
    {
        path: "/user-manage/adduser",
        component: UserAdd,
        requireAdmin: true,
        meta: {
            title: '添加用户'
        }
    },
    {
        path: "/user-manage/userlist",
        component: UserList,
        requireAdmin: true,
        meta: {
            title: '用户列表'
        }
    },

    {
        path: "/news-manage/addnews",
        component: NewsAdd,
        meta: {
            title: '添加新闻'
        }
    },
    {
        path: "/news-manage/newslist",
        component: NewsList,
        meta: {
            title: '新闻列表'
        }
    },
    {
        path: "/news-manage/editnews/:id",
        component: NewsEdit,
        meta: {
            title: '编辑新闻'
        }
    },

    {
        path: "/product-manage/addproduct",
        component: ProductAdd
    },
    {
        path: "/product-manage/productlist",
        component: ProductList,
        meta: {
            title: '产品列表'
        }
    },

    {
        path: "/product-manage/editproduct/:id",
        component: ProductEdit,
        meta: {
            title: '编辑产品'
        }
    },
    {
        path: "/",
        redirect: "/index",
        meta: {
            title: '首页'
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Notfound",
        component: NotFound,
        meta: {
            title: '404'
        }
    }
]

export default routes