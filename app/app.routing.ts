import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {CalculatorsComponent} from './pages/calculators/calculators.component';
import {ContactComponent} from './pages/contact/contact.component';
const appRoutes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
    {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
    {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Servces'
    }
  },
    {
    path: 'calculators',
    component: CalculatorsComponent,
    data: {
      title: 'Calculators'
    }
  },
    {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Us'
    }
  },
  
 
];
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);