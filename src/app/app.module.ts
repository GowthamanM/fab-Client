import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormsModule } from '@angular/forms';
import { MaleChoiceComponent } from './quiz/male/male-choice/male-choice.component';
import { MaleResultComponent } from './quiz/male/male-result/male-result.component';

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
    MaleResultComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
