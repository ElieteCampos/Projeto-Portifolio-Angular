import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../portifolio/interface/IProjects.interface';

//material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//ENUM
import { EDialogPanelClass } from '../../portifolio/enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: "/assets/img/projects/angular.png",
      alt: "projeto portifolio currículo",
      title: "Projeto angular Portifólio",
      width: "100px",
      height: "100px",
      description: "<p>Projeto de portifólio desenvolvido em Angular, com intuito de aprendizagem, desenvolvido durante o curso de angular pela Udemy utilizando o Angular Material</p>",
      links: [
        {
          name: "Conheça o blog do curso",
          href: "https://vidafullstack.com.br",

        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
