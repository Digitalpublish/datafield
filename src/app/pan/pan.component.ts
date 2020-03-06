import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../_service/services.service';
import { Router, Data } from '@angular/router';
import { Productitem } from '../productitem';
import { HttpClient } from '@angular/common/http';
//import { User } from '../user';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css']
})
export class PanComponent implements OnInit {

  data: any;
  datas: any;
  postdata: any;
  productitem: Productitem[];
  productid= "LLI";
  imagevalue:string = null;
  imagename:string = "";
  fd:any;
  id: any;

  token: string;
 

  constructor( private product:ServicesService, private router: Router, private _http:HttpClient) { 

    const user = JSON.parse(localStorage.getItem('eq_user'));
    if ( user ) {
      this.token = user.access_token;
    }

  }

  ngOnInit() {
    this.getproductdata();
    //this.getcareer();
  }

  productform = new FormGroup({
    client : new FormControl('',Validators.required),
    product : new FormControl('', Validators.required),
    pan : new FormControl('', Validators.required),
    lighttype : new FormControl('', Validators.required),
    voltage : new FormControl('', Validators.required),
    wattage : new FormControl('', Validators.required),
    basesize : new FormControl('', Validators.required),
    efficacy : new FormControl('', Validators.required),
    cri : new FormControl('', Validators.required),
    pf : new FormControl('', Validators.required),
    angle : new FormControl('', Validators.required),
    material : new FormControl('', Validators.required),
    scolors : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required)
  });

  getproductdata(){
    this.product.getproductdata().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      }
    );
  }
  
  addproduct(){
    this.product.addproduct(this.productform.value)
    .subscribe(data => {
      console.log(this.data);
      
    })
    alert("Data submitted successfuly");
      this.productform.reset();
      this.router.navigate(['administratorpage']);
  }

  deleteitem(post){
    this.product.deletePost(post.product_id)
    .subscribe( data => {
      let postI = this.data.indexOf(post.product_id);
      this.data.splice(postI, 1);
      this.router.navigate(['administratorpage']);
      console.log(this.data);
    })
  }

  updateitem(productitem: Productitem){
    this.id = productitem.product_id;
    this.router.navigate(['editpost/' + this.id]);
  }

  fileupload(event){
    this.imagevalue = event.target.files[0].name;
    console.log(event);
  }



}
