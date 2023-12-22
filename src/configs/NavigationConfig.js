import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'sidenav.main.catalog.goods',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'combos',
          path: `${APP_PREFIX_PATH}/main/catalog/combos`,
          title: 'sidenav.main.catalog.combos',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'clientsList',
          path: `${APP_PREFIX_PATH}/main/clients/clientsList`,
          title: 'sidenav.main.clients.clientsList',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'clientsGroups',
          path: `${APP_PREFIX_PATH}/main/clients/clientsGroups`,
          title: 'sidenav.main.clients.clientsGroups',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'sidenav.main.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offlinePlaces',
      path: `${APP_PREFIX_PATH}/main/offlinePlaces`,
      title: 'sidenav.main.offlinePlaces',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'adresses',
          path: `${APP_PREFIX_PATH}/main/offlinePlaces/addresses`,
          title: 'sidenav.main.offlinePlaces.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'geozones',
          path: `${APP_PREFIX_PATH}/main/offlinePlaces/geozones`,
          title: 'sidenav.main.offlinePlaces.geozones',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'newsletters',
      path: `${APP_PREFIX_PATH}/main/newsletters`,
      title: 'sidenav.main.newsletters',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
},
{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobileApp`,
      title: 'sidenav.system.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'sidenav.system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}

]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
