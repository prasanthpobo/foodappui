import { Routes } from "@angular/router";

import { ChangeProfileComponent } from "./change-profile/change-profile.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { SavedAddressComponent } from "./saved-address/saved-address.component";
import { SavedCardComponent } from "./saved-card/saved-card.component";
import { SettingsComponent } from "./settings/settings.component";

export default [
    { 
        path: 'change-profile',
        component: ChangeProfileComponent,
        data: {
            breadcrumb: "Profile",
        }
    },
    {
        path: 'my-order',
        component: MyOrderComponent,
        data: {
            breadcrumb: "My Order",
        }
    },
    {
        path: 'saved-address',
        component: SavedAddressComponent,
        data: {
            breadcrumb: "Saved Address",
        }
    },
    {
        path: 'saved-card',
        component: SavedCardComponent,
        data: {
            breadcrumb: "Saved Card",
        }
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: {
            breadcrumb: "Setting",
        }
    },
] as Routes;
