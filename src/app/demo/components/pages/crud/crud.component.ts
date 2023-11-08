import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Departement } from 'src/app/core/model/Departement';
import {  CongeService } from 'src/app/core/service/conge.service';

@Component({
  templateUrl: './crud.component.html',
  providers: [MessageService]
})
export class CrudComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  conge!: Departement; 
  conges!: Departement[];
  cols: any[] = []; 
  rowsPerPageOptions: any[] = [];
  selectedConges: Departement[] = [];
  nouveauConge: Departement = {
    idDepart: 0,
    nomDepart: '',
  };
  congeDialog: boolean = false;
  submitted: boolean = false;
  mode: 'ajout' | 'modification' = 'ajout';

  constructor(
    private congeService: CongeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getConges();
    this.initCols(); 
    this.initRowsPerPageOptions(); 
  }

  showCongeDialog(conge: Departement) {
    this.nouveauConge = { ...conge }; 
    this.congeDialog = true;
    this.mode = conge.idDepart ? 'modification' : 'ajout';
  }
  
  ajouterConge(conge: Departement) {
    this.congeService.addDepartement(conge).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Congé ajouté', life: 3000 });
        this.getConges();
        this.congeDialog = false;
        this.nouveauConge = { 
          idDepart: 0,
          nomDepart: '',
        };
        this.mode = 'ajout';
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  modifierConge(conge: Departement) {
    this.congeService.updateDepartement(conge).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Congé modifié', life: 3000 });
        this.getConges();
        this.congeDialog = false;
        this.mode = 'ajout';
      },
      (error) => {
        console.error(error);
      }
    );
  }
  supprimerConge(idDepart: number) {
    this.congeService.deleteDepartement(idDepart).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Congé supprimé', life: 3000 });
        this.getConges();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getConges() {
    this.congeService.getDepartements().subscribe(
      (data) => {
        this.conges = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  hideCongeDialog() {
    this.congeDialog = false;
  }

  deleteSelectedConges() {
  }

  onGlobalFilter(table: Table, event: any) {
  }

  initCols() {
  }

  initRowsPerPageOptions() {
  }
}