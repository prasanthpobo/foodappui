import { Routes } from "@angular/router";
import { ClassicComponent } from "./classic/classic.component";
import { EleganceComponent } from "./elegance/elegance.component";
import { MinimalComponent } from "./minimal/minimal.component";
import { ModernComponent } from "./modern/modern.component";
import { CompactsComponent } from "./compact/compact.component";

export default [
  {
    path: '',
    children: [
      {
        path: 'classic',
        component: ClassicComponent,
      },
      {
        path: 'elegance',
        component: EleganceComponent,
      },
      {
        path: 'compact',
        component: CompactsComponent,
      },
      {
        path: 'minimal',
        component: MinimalComponent,
      },
      {
        path: 'modern',
        component: ModernComponent,
      },

    ]
  }
] as Routes;
