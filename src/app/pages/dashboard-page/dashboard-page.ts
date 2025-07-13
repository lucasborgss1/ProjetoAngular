import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../components/dashboard/dashboard';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Table } from '../../components/table/table';
import { Veiculo, VeiculoData } from '../../models/veiculo.model';

@Component({
  selector: 'app-dashboard-page',
  imports: [Dashboard, Header, Footer],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {
  vehicles: Veiculo[] = [];
  selectedVehicle?: Veiculo;
  vehicleData?: VeiculoData;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getVehicles().subscribe((res) => {
      this.vehicles = res.vehicles;
      const firstId = this.vehicles[0]?.id;
      this.selectedVehicle = this.vehicles[0];
      console.log('Page: ' + this.selectedVehicle);
      console.log('Page: ' + this.vehicleData);
    });
    this.consultarDadosPorVin('2FRHDUYS2Y63NHD22854');
  }

  consultarDadosPorVin(vin: string): void {
    // const vin = this.vinForm.controls.vin.value;
    this.dashboardService.getVehicleData(vin).subscribe((data) => {
      this.vehicleData = data;
    });
  }
}
