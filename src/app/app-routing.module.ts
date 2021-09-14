import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { ChoiceComponent } from './quiz/choice/choice.component';
import { CommonQuizComponent } from './quiz/common-quiz/common-quiz.component';
import { FemaleChoiceComponent } from './quiz/female/female-choice/female-choice.component';
import { FemaleResultComponent } from './quiz/female/female-result/female-result.component';
import { FemaleComponent } from './quiz/female/female.component';
import { KidsChoiceComponent } from './quiz/kids/kids-choice/kids-choice.component';
import { KidsResultComponent } from './quiz/kids/kids-result/kids-result.component';
import { KidsComponent } from './quiz/kids/kids.component';
import { MaleChoiceComponent } from './quiz/male/male-choice/male-choice.component';
import { MaleResultComponent } from './quiz/male/male-result/male-result.component';
import { MaleComponent } from './quiz/male/male.component';
import { QuizComponent } from './quiz/quiz.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { SignUpQuizComponent } from './sign-up-quiz/sign-up-quiz.component';
import { SignupComponent } from './signup/signup.component';
import { NotSubscribedComponent } from './subscription/not-subscribed/not-subscribed.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { WalletComponent } from './wallet/wallet.component';
import { LikedComponent } from './wardrobe/liked/liked.component';
import { ProductListComponent } from './wardrobe/product-list/product-list.component';
import { ProductsComponent } from './wardrobe/products/products.component';
import { WarChoiceComponent } from './wardrobe/war-choice/war-choice.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  {path:'sign-up-quiz',component:SignUpQuizComponent,canActivate:[AuthGuard]},
  { path: 'change-password', component: ForgotPasswordComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'quiz', component: QuizComponent, children: [
    { path: '', component: ChoiceComponent},
    { path: 'male', component: MaleComponent, children: [
      { path: '', component: MaleChoiceComponent},
      { path: 'selection/:id', component: MaleResultComponent}
    ]},
    { path: 'female', component: FemaleComponent, children: [
      { path: '', component: FemaleChoiceComponent},
      { path: 'selection/:id', component: FemaleResultComponent}
    ]},
    { path: 'kids', component: KidsComponent, children: [
      { path: '', component: KidsChoiceComponent},
      { path: 'selection/:id', component: KidsResultComponent}
    ]},
    { path: 'common-quiz', component: CommonQuizComponent}
  ],canActivate:[AuthGuard]},

  { path: 'wardrobe', component: WardrobeComponent, children: [
    { path: '', component: WarChoiceComponent},
    { path: 'product', component: ProductsComponent},
    { path: 'liked', component: LikedComponent},
    { path: 'product/:id', component: ProductListComponent}
  ],canActivate:[AuthGuard]},
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'not-subscribed', component: NotSubscribedComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsOfServiceComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'wallet',component:WalletComponent}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
