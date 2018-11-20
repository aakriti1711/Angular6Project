import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

interface myData{
  obj : Object
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myVariable ="App"
  text ="Aakriti"
  disable = false
  data: any[];
   
  constructor(private _recordService:RecordsService) {
    // setInterval(()=>{
    //   this.myVariable = Math.random().toString()
    //   this.disable = Math.random() >0.5
    // },500)
   }
   updateValue(e){
    this.text = e.target.value 
   }
  ngOnInit() {
    this._recordService.getData()
                .subscribe(data => {
                  this.data = data[0].obj
                });
                
  }

}
