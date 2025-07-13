import { Component, Input } from '@angular/core';
import { VeiculoData } from '../../models/veiculo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() data?: VeiculoData;
  @Input() errorMessage?: string;
}
