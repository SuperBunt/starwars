import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./app.component.css']
})
export class WelcomeComponent {
  title = 'My Star Wars App';
  image = '../assets/classic-logo.png'
}