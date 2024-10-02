import { Routes } from "@angular/router";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { BlogListingComponent } from "./blog-listing/blog-listing.component";
import { GridLeftSidebarComponent } from "./grid-left-sidebar/grid-left-sidebar.component";
import { GridRightSidebarComponent } from "./grid-right-sidebar/grid-right-sidebar.component";

export default [
  {
    path: '',
    children: [
      {
        path: 'grid-left-sidebar',
        component: GridLeftSidebarComponent,
      },
      {
        path: 'grid-right-sidebar',
        component: GridRightSidebarComponent,
      },
      {
        path: 'blog-listing',
        component: BlogListingComponent,
      },
      {
        path: 'blog-details/:slug',
        component: BlogDetailsComponent,
      },
    ]
  }
]as Routes;