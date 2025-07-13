import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo, VeiculoData } from '../../models/veiculo.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Table } from '../table/table';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, CommonModule, Card, Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  vehicleData!: VeiculoData;
  errorMessage?: string;

  selectCarForms = new FormGroup({
    carId: new FormControl(''),
  });

  vinForm = new FormGroup({
    vin: new FormControl(''),
  });

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getVehicles().subscribe((res) => {
      this.vehicles = res.vehicles;
      const firstId = this.vehicles[0]?.id;
      this.selectCarForms.controls.carId.setValue(firstId.toString());
      this.selectedVehicle = this.vehicles[0];
    });

    this.selectCarForms.controls.carId.valueChanges.subscribe((id) => {
      this.selectedVehicle = this.vehicles[Number(id) - 1];
      console.log(this.selectedVehicle);
    });
  }

  consultarDadosPorVin() {
    const vin = this.vinForm.controls.vin.value;
    this.errorMessage = '';
    if (vin) {
      this.dashboardService
        .getVehicleData(vin)
        .pipe(
          catchError((error) => {
            this.errorMessage =
              'Erro ao buscar dados do veículo: ' +
              (error?.error?.message || 'Erro desconhecido');
            this.vehicleData = undefined!;
            return of(null);
          })
        )
        .subscribe((data) => {
          if (data) this.vehicleData = data;
        });
    }
  }
}
