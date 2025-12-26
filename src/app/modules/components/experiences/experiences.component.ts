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
        p: 'Agworks | Março 2024 - Present',
      },
      text: '<p>Desde Março de 2024 atuava como trainee em Front End, e em outubro 2025 como junior em frontend aspirante a fullstack</p>',
    },
  ]);
}
