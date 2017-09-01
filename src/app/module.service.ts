import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Module } from './module';
import { MODULES } from './mock-modules';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModuleService {

  constructor(private http: Http) { }

  getModules(): Promise<Module[]> {
    this.http.get('https://api.nusreviews.com/getModulesFullAttribute')
             .toPromise()
             .then(response => console.log(response.json()))
             .catch(this.handleError);

    return Promise.resolve(MODULES);
  }
  getModulesSlowly(): Promise<Module[]> {
    return new Promise(resolve => {
      // Simulate server latency with 1 second delay
      setTimeout(() => resolve(this.getModules()), 1000);
    });
  }
  getModuleById(id: number): Promise<Module> {
      return this.getModules().then(modules => modules.find(module => module.id === id));
  }
  getModuleByCode(code: string): Promise<Module> {
      return this.getModules().then(modules => modules.find(module => module.code === name));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
