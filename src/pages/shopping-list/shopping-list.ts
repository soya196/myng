import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor(private slService: ShoppingListService) {
  }

  ionViewWillEnter() {
    this.loadItems();

  }

  private loadItems() {
    this.listItems = this.slService.getItems();
  }

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredienName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onRemoveItem(index: number ){
    this.slService.removeItem(index);
    this.loadItems();
  }
}
