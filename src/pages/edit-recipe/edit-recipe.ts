import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html'
})
export class EditRecipePage implements OnInit {
  mode = 'New';

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    console.log("mode param", this.mode)
  }

  constructor(private navParams: NavParams) {
  }


}
