import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {Mail, Lock, Image } from 'angular-feather/icons';

const icons = {
  Mail,
  Lock,
  Image
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }