import { Component, signal } from '@angular/core';

// interface
import { IExperiences } from '../../portifolio/interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'FrontEnd Junior aspirante a Fullstack',
        p: 'Agworks | Março 2024 - Atual',
      },
      text: '<p>Desde Março de 2024 atuava como trainee em Front End, e em outubro 2025 como junior em frontend aspirante a fullstack</p>',
    },
    {
      summary: {
        strong: 'Estágio em desenvolvimento FrontEnd',
        p: 'TT&T | Setembro 2023 - Janeiro 2025',
      },
      text: '<p>Estágio em desenvolvimento FrontEnd com conhecimentos em HTML, CSS e JavaScript e ReactJs, Angular, Ionic trabalhei em projetos como Hipizza que era um app para Pizzarias e o HiAdv que foi um app de agendas para Advogados, constuindo telas responsivas e com boas práticas, interações com o usuário </p>',
    },
  ]);
}
