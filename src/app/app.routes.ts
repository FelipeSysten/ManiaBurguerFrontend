import { Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ProductComponent } from './views/product/product.component';
import { DetailComponent } from './views/detail/detail.component';
import { OrderComponent } from './views/order/order.component';
import { LocationComponent } from './views/location/location.component';
import { ContactComponent } from './views/contact/contact.component';


export const routes: Routes = [


    {   path: '', 
        component: HomeComponent,
        title:'Home'
    },



    {   path: 'menu', 
        component: MenuComponent,
        title:'Menu'
    },

    {   path: 'categoria', 
        component: CategoriaComponent,
        title:'Categoria'
    }, 

    {   path: 'products/:id', 
        component: ProductComponent,
        title:'ProdutoId'
    },

    {   path: 'detail/:id', 
        component: DetailComponent,
        title:'Detalhes'
    },

    {   path: 'order', 
        component: OrderComponent,
        title:'Pedido'
    },

    {   path: 'location', 
        component: LocationComponent,
        title:'Localização'
    },

    {   path: 'contact', 
        component: ContactComponent,
        title:'Contato'
    }

];
