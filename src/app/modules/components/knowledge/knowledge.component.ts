import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../portifolio/interface/IKnowledge.interface';
@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/knowledge/icons8-claude-ai-48.png',
      alt: 'icon de conhecimento de Claude AI',
    },

    {
      src: 'assets/knowledge/html.svg',
      alt: 'icon de conhecimento de html5',
    },
    {
      src: 'assets/knowledge/angular.svg',
      alt: 'icon de conhecimento de angular',
    },
    {
      src: 'assets/knowledge/icons8-react-40.png',
      alt: 'icon de conhecimento de React',
    },
    {
      src: 'assets/knowledge/css.svg',
      alt: 'icon de conhecimento de css',
    },
    {
      src: 'assets/knowledge/icons8-tailwind-css-48.png',
      alt: 'icon de conhecimento de Tailwind CSS',
    },
    {
      src: 'assets/knowledge/bootstrap.svg',
      alt: 'icon de conhecimento de bootstrap5',
    },
    {
      src: 'assets/knowledge/icons8-ionic-50.png',
      alt: 'icon de conhecimento de ionic',
    },
    {
      src: 'assets/knowledge/js.svg',
      alt: 'icon de conhecimento de javascript',
    },
    {
      src: 'assets/knowledge/icons8-typescript-50.png',
      alt: 'icon de conhecimento de typescript',
    },

    {
      src: 'assets/knowledge/csharp.svg',
      alt: 'icon de conhecimento de csharp',
    },

    {
      src: 'assets/knowledge/net.core.svg',
      alt: 'icon de conhecimento de net.core mvc',
    },
    {
      src: 'assets/knowledge/icons8-swagger-48.png',
      alt: 'icon de conhecimento de Swagger',
    },
    {
      src: 'assets/knowledge/icons8-postman-api-64.png',
      alt: 'icon de conhecimento de Postman',
    },
    {
      src: 'assets/knowledge/icons8-sql-50.png',
      alt: 'icon de conhecimento de SQL',
    },
    {
      src: 'assets/knowledge/git.svg',
      alt: 'icon de conhecimento de Git',
    },
    {
      src: 'assets/knowledge/github.png',
      alt: 'icon de conhecimento de Github',
    },

  ]);
}
