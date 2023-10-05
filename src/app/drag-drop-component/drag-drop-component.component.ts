import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-component',
  templateUrl: './drag-drop-component.component.html',
  styleUrls: ['./drag-drop-component.component.scss']
})
export class DragDropComponentComponent {

   public posicaoAtual: number = -1;
   public posicaoMovimentada: number = -1;

   movies = [
    'Agrupador  teste 1',
    'Agrupador  teste 2',
    'Agrupador  teste 3',
    'Agrupador  teste 5',
    'Agrupador  teste 6',
    'Agrupador  teste 7',
    'Agrupador  teste 8',
    'Agrupador  teste 9',
  ];

  drop(event: CdkDragDrop<string[]>) {
    this.posicaoAtual = event.currentIndex;
    this.posicaoMovimentada =  event.previousIndex;
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies);
  }
}
