import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { EmptyCartComponent } from "./empty-cart/empty-cart.component";
import { FaqComponent } from "./faq/faq.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OtpComponent } from "./otp/otp.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { WishlistComponent } from "./wishlist/wishlist.component";

export default [
    {
        path: '404',
        component: NotFoundComponent,
    },
    {
        path: 'coming-soon',
        component: ComingSoonComponent,
    },
    {
        path: 'empty-cart',
        component: EmptyCartComponent,
    },
    {
        path: 'faqs',
        component: FaqComponent,
    },
    {
        path: 'otp',
        component: OtpComponent,
    },
    {
        path: 'testimonial',
        component: TestimonialComponent,
    },
    {
        path: 'sign-in',
        component: SignInComponent,
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    },
    {
        path: 'wishlist',
        component: WishlistComponent,
    }
]