import { Component, OnInit } from '@angular/core';

import { Module } from '../module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.css']
})
export class SearchModuleComponent implements OnInit {

  private moduleService: ModuleService = null;
  public modules: Module[] = null;
  public selectedModule: Module = null;

  constructor(moduleService: ModuleService) {
    this.moduleService = moduleService;
  }

  ngOnInit() {
  }

}
