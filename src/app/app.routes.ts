import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Component } from '@angular/core';
import { ContacusComponent } from './pages/contacus/contacus.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "team", component: TeamComponent},
    {path: "contacus", component: ContacusComponent}
];
