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
      src: 'assets/knowledge/html.svg',
      alt: 'icon de conhecimento de html5',
    },
    {
      src: 'assets/knowledge/angular.svg',
      alt: 'icon de conhecimento de angular',
    },
    {
      src: 'assets/knowledge/css.svg',
      alt: 'icon de conhecimento de css',
    },
    {
      src: 'assets/knowledge/js.svg',
      alt: 'icon de conhecimento de javascript',
    },
    {
      src: 'assets/knowledge/csharp.svg',
      alt: 'icon de conhecimento de csharp',
    },
    {
      src: 'assets/knowledge/bootstrap.svg',
      alt: 'icon de conhecimento de bootstrap5',
    },
    {
      src: 'assets/knowledge/net.core.svg',
      alt: 'icon de conhecimento de net.core mvc',
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
