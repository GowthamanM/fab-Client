import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { LikedComponent } from './wardrobe/liked/liked.component';
import { ProductsComponent } from './wardrobe/products/products.component';
import { ChoiceComponent } from './quiz/choice/choice.component';
import { MaleComponent } from './quiz/male/male.component';
import { FemaleComponent } from './quiz/female/female.component';
import { KidsComponent } from './quiz/kids/kids.component';
import { SecondaryNavbarComponent } from './secondary-navbar/secondary-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaleChoiceComponent } from './quiz/male/male-choice/male-choice.component';
import { MaleResultComponent } from './quiz/male/male-result/male-result.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { BrandPartnersComponent } from './home/brand-partners/brand-partners.component';
import { FemaleChoiceComponent } from './quiz/female/female-choice/female-choice.component';
import { KidsChoiceComponent } from './quiz/kids/kids-choice/kids-choice.component';
import { ProductListComponent } from './wardrobe/product-list/product-list.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './auth/auth.guard';

import { FemaleResultComponent } from './quiz/female/female-result/female-result.component';
import { KidsResultComponent } from './quiz/kids/kids-result/kids-result.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    QuizComponent,
    WardrobeComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    RefundPolicyComponent,
    LikedComponent,
    ProductsComponent,
    ChoiceComponent,
    MaleComponent,
    FemaleComponent,
    KidsComponent,
    SecondaryNavbarComponent,
    MaleChoiceComponent,
    MaleResultComponent,
    TestimonialComponent,
    BrandPartnersComponent,
    FemaleChoiceComponent,
    KidsChoiceComponent,
    ProductListComponent,
    FemaleResultComponent,
    KidsResultComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
