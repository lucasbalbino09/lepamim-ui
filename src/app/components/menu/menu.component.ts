import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  sidebarVisible: boolean = false;
  items: MenuItem[] = [
    {
        label: 'Livros',
        icon: 'pi pi-book',
        items : [
          {
            label : 'Para Colorir'          
          },
          {
            label : 'Ilustrativo'          
          },
          {
            label : 'Gibis'          
          },
        ]  
    },
    {
      label: 'Atividades',
      icon: 'pi pi-flag',
      items: [
        {
          label: 'Em Grupo'
        },
        {
          label: 'Individual'
        }
      ]  
    },
    {
      label: 'Brincadeiras',
      icon: 'pi pi-sparkles',
      items: [
        {
          label: 'Em Grupo'
        },
        {
          label: 'Individual'
        }
      ]  
    },
    {
      label: 'Dicas e Sugestões',
      icon: 'pi pi-pencil'
    },
    {
      label: 'Sobre Nós',
      icon: 'pi pi-users'
    }
  ];
}
