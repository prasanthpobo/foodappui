import { Routes } from "@angular/router";
import { ContactComponent } from "../../component/pages/contact/contact.component";
import { AboutComponent } from "../../component/home/modern/shop-sidebar/about/about.component";

export const contentRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../../component/home/home.routes')
    },
    {
        path: 'order',
        loadChildren: () => import('../../component/order/order.routes')
    },
    {
        path: 'blog',
        loadChildren: () => import('../../component/blog/blog.routes')
    },
    {
        path: 'pages',
        loadChildren: () => import('../../component/pages/pages.routes')
    },
    {
        path: 'contact',
        component: ContactComponent,
    }, 
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'account',
        loadChildren: () => import('../../component/account/account.routes')

    }
]
