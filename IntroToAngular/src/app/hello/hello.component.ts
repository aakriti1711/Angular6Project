import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myVariable ="App"
  text ="Aakriti"
  disable = false

  data =[
    {
      name:"Aakriti",
      online:true
    },
    {
      name:"ABC",
      online:false
    },
    {
      name:"DEF",
      online:true
    },
    {
      name:"GHI",
      online:false
    } 
]
  constructor() {
    // setInterval(()=>{
    //   this.myVariable = Math.random().toString()
    //   this.disable = Math.random() >0.5
    // },500)
   }
   updateValue(e){
    this.text = e.target.value 
   }
  ngOnInit() {
  }

}
