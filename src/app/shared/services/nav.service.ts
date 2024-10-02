import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Menu {
  level?: number;
  title?: string;
  type?: string;
  path?: string;
  active?: boolean;
  image_url?: string,
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})

export class NavService {

  public isOpen: boolean = false;
  public isShow: boolean = false;
  navItems: Menu[] = [
    {
      level: 1,
      active: false,
      title: "Home",
      type: "sub",
      children: [
        { path: "/home/classic", title: "Classic", type: "link", image_url: 'assets/images/demo/1.png' },
        { path: "/home/elegance", title: "Elegance", type: "link", image_url: 'assets/images/demo/2.png' },
        { path: "/home/compact", title: " Compact", type: "link", image_url: 'assets/images/demo/3.png' },
        { path: "/home/minimal", title: "Minimal", type: "link", image_url: 'assets/images/demo/4.png' },
        { path: "/home/modern", title: "Modern", type: "link", image_url: 'assets/images/demo/5.png' },
      ],
    },
    {
      level: 1,
      active: false,
      title: "Order",
      type: "sub",
      children: [
        { path: "/order/menu-listing/poultry-palace", title: "Menu listing", type: "link" },
        { path: "/order/menu-grid", title: "Menu grid", type: "link" },
        { path: "/order/address", title: "Address", type: "link" },
        { path: "/order/checkout", title: "Checkout", type: "link" },
        { path: "/order/confirm-order", title: "Confirm order", type: "link" },
        { path: "/order/offer", title: "Offer", type: "link" },
        { path: "/order/order-tracking", title: "Order tracking", type: "link" },
        { path: "/order/payment", title: "Payment", type: "link" },
        { path: "/order/restaurant-listing", title: "Restaurant listing", type: "link" },
      ],
    },
    {
      level: 1,
      active: false,
      title: "Blog",
      type: "sub",
      children: [
        { path: "/blog/grid-left-sidebar", title: "Grid Left Sidebar", type: "link" },
        { path: "/blog/grid-right-sidebar", title: "Grid Right Sidebar", type: "link" },
        { path: "/blog/blog-listing", title: "Blog Listing", type: "link" },
        { path: "/blog/blog-details/by-furion", title: "Blog Details", type: "link" },
      ],
    },
    {
      level: 1,
      active: false,
      title: "Pages",
      type: "sub",
      children: [
        { path: "/pages/404", title: "404", type: "link" },
        { path: "/pages/coming-soon", title: "Coming soon", type: "link" },
        { path: "/contact", title: "Contact", type: "link" },
        { path: "/pages/empty-cart", title: "Empty Cart", type: "link" },
        { path: "/pages/faqs", title: "FAQs", type: "link" },
        { path: "/pages/otp", title: "OTP", type: "link" },
        { path: "/pages/sign-in", title: "Sign in", type: "link" },
        { path: "/pages/sign-up", title: "Sign up", type: "link" },
        { path: "/pages/testimonial", title: "Testimonial", type: "link" },
        { path: "/pages/wishlist", title: "Wishlist", type: "link" },
      ],
    },
    {
      level: 1,
      path: "/contact",
      title: "Contact",
      type: "link",
    },
  ]
  items = new BehaviorSubject<Menu[]>(this.navItems);
}
