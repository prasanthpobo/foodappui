import { Routes } from "@angular/router";
import { AddressComponent } from "./address/address.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ConfirmOrderComponent } from "./confirm-order/confirm-order.component";
import { MenuGridComponent } from "./menu-grid/menu-grid.component";
import { MenuListingComponent } from "./menu-listing/menu-listing.component";
import { OfferComponent } from "./offer/offer.component";
import { OrderTrackingComponent } from "./order-tracking/order-tracking.component";
import { PaymentComponent } from "./payment/payment.component";
import { RestaurantListingComponent } from "./restaurant-listing/restaurant-listing.component";

export default [
  {
    path: '',
    children: [
      {
        path: 'menu-listing/:slug',
        component: MenuListingComponent,
      },
      {
        path: 'menu-grid',
        component: MenuGridComponent,
      },
      {
        path: 'offer',
        component: OfferComponent,
      },
      {
        path: 'restaurant-listing',
        component: RestaurantListingComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'confirm-order',
        component: ConfirmOrderComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'order-tracking',
        component: OrderTrackingComponent,
      },
    ]
  }
]as Routes;
