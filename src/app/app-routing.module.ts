import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { ChoiceComponent } from './quiz/choice/choice.component';
import { FemaleComponent } from './quiz/female/female.component';
import { KidsComponent } from './quiz/kids/kids.component';
import { MaleComponent } from './quiz/male/male.component';
import { QuizComponent } from './quiz/quiz.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { SignupComponent } from './signup/signup.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { LikedComponent } from './wardrobe/liked/liked.component';
import { ProductsComponent } from './wardrobe/products/products.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'change-password', component: ForgotPasswordComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'quiz', component: QuizComponent, children: [
    { path: '', component: ChoiceComponent},
    { path: 'male/:id', component: MaleComponent},
    { path: 'female/:id', component: FemaleComponent},
    { path: 'kids/:id', component: KidsComponent}
  ]},
  { path: 'wardrobe', component: WardrobeComponent, children: [
    { path: '', component: ProductsComponent},
    { path: 'liked', component: LikedComponent}
  ]},
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
