import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse }    from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { Contact } from '../contact';
import { Productitem } from '../productitem';
//import { Career } from '../career';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //contact: Contact[];
  productitem: Productitem[];
  //career: Career[];
  //userlogin: Userlogin[];
  errorData: {};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  // getdata(){
  //   return this.http.get<Contact[]>('http://localhost/luminupled/list.php');
  // }

  // adddata(contact: Contact){
  //   return this.http.post('http://localhost/luminupled/insert.php', contact);
  // }
  // ************Add and fetch product record************

  addproduct(productitem: Productitem){
    return this.http.post('http://localhost/luminupled/insertproductitem.php', productitem);
  }

  getproductdata(){
    return this.http.get<Productitem[]>('http://localhost/luminupled/listproductitem.php');
  }

  deletePost(id:number){
    return this.http.delete('http://localhost/luminupled'+'/deleteproduct.php?id='+ id);
  }

  editPost(id:number){
   return this.http.get<Productitem[]>('http://localhost/luminupled/updateproduct.php?id='+ id);
  }

  getproductbyid(id:number){
    return this.http.get<Productitem[]>('http://localhost/luminupled/updateproduct.php?id='+ id);
  }



  updateproductitem(productitem: Productitem){
    return this.http.put<Productitem>('http://localhost/luminupled/editproduct.php' + '?id=' + productitem.product_id, productitem);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
