import { Component, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.interface';


@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src:"/assets/img/projects/angular.png",
      alt:"projeto portifolio currículo",      
      title:"Projeto portifólio",
      width: "100px",
      height: "51px",
      description: "<p> Blogue do projeto pórtifolio</p>",
      links: [
        {
        name: "Conheça o blog",
        href: "https://vidafullstack.com.br",
        
      },
    ],
    },
  ]);
}
