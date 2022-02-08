import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  
 //showing hamburger menu
  hamStatus: boolean = false;
  showSearchForm(hamStatus: boolean){
    console.log(hamStatus);
    const searchForm = document.querySelector('.search-form');    // selecting search-form element
    if(!this.hamStatus){
      this.renderer.setStyle(searchForm, 'display', 'inline');    // we use Renderer2 to style css/sass
    }
    else{
      this.renderer.setStyle(searchForm, 'display', 'none');    // we use Renderer2 to style css/sass
    }
    this.hamStatus = !this.hamStatus;

     
}

  onSubmit(form: NgForm){
    // console.log(form.value.search);
    this.router.navigate(['search', form.value.search]);
  }

}
