import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'meus-pets',
    loadChildren: () => import('./meus-pets/meus-pets.module').then(m => m.MeusPetsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./auth/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./auth/recuperar-senha/recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'modal-notificacao',
    loadChildren: () => import('./shared/pages/modal-notificacao/modal-notificacao.module').then( m => m.ModalNotificacaoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import ('./erros/erros.module').then(m => m.ErrosModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
