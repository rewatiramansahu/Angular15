import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { LoginModule } from 'src/login/login.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GreetComponent } from './components/greet/greet.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { CardComponent } from './components/card/card.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { EventDirectivesComponent } from './components/event-directives/event-directives.component';
import { PostCrudApiComponent } from './components/post-crud-api/post-crud-api.component';
import { DirectivesPracticeComponent } from './components/directives-practice/directives-practice.component';
import { DependentSelectComponent } from './components/dependent-select/dependent-select.component';
import { NumberOnlyDirective } from './custom-directives/number-only.directive';
import { CustomDirectivesPracticesComponent } from './components/custom-directives-practices/custom-directives-practices.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { BackButtonDirective } from './custom-directives/back-button.directive';
import { CountClickDirective } from './custom-directives/count-click.directive';
import { PasswordStrengthDirective } from './custom-directives/password-strength.directive';
import { StructureDirectiveDirective } from './custom-directives/structure-directive.directive';
import { CustomInputDirectiveDirective } from './custom-directives/custom-input-directive.directive';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { InputValidationDirective } from './custom-directives/input-validation.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { AssignmentCustomPipeComponent } from './components/assignment-custom-pipe/assignment-custom-pipe.component';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { PrependTitlePipe } from './custom-pipes/prepend-title.pipe';
import { NameFilterPipe } from './custom-pipes/name-filter.pipe';
import { CustomPipesPracticesComponent } from './components/custom-pipes-practices/custom-pipes-practices.component';
import { TruncatePipe } from './custom-pipes/truncate.pipe';
import { SortByPipe } from './custom-pipes/sort-by.pipe';
import { UniqueFilterPipe } from './custom-pipes/unique-filter.pipe';
import { CalculateAgePipe } from './custom-pipes/calculate-age.pipe';
import { MaskAccnoPipe } from './custom-pipes/mask-accno.pipe';
import { HighlightPipe } from './custom-pipes/highlight.pipe';
import { CapitalizePipe } from './custom-pipes/capitalize.pipe';
import { NumberToWordsPipe } from './custom-pipes/number-to-words.pipe';
import { ShufflePipe } from './custom-pipes/shuffle.pipe';
import { GroupByPipe } from './custom-pipes/group-by.pipe';
import { FilterPipe } from './custom-pipes/impure-pipes/filter.pipe';
import { ImpurePipesPracticesComponent } from './components/impure-pipes-practices/impure-pipes-practices.component';
import { SortingPipe } from './custom-pipes/impure-pipes/sorting.pipe';
import { ComponentCommunicationComponent } from './components/component-communication/component-communication/component-communication.component';
import { ParentComponent } from './components/component-communication/parent/parent.component';
import { Child1Component } from './components/component-communication/child1/child1.component';
import { Child2Component } from './components/component-communication/child2/child2.component';
import { EmployeeTableComponent } from './components/component-communication/employee-table/employee-table.component';
import { EmployeeAddComponent } from './components/component-communication/employee-add/employee-add.component';
import { EmployeesCrudComponent } from './components/component-communication/employees-crud/employees-crud.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { NgDoCheckComponent } from './components/life-cycle-hooks/ng-do-check/ng-do-check.component';
import { ViewChild1Component } from './components/life-cycle-hooks/view-child1/view-child1.component';
import { ViewChildParentComponent } from './components/life-cycle-hooks/view-child-parent/view-child-parent.component';
import { ViewChild2Component } from './components/life-cycle-hooks/view-child2/view-child2.component';
import { ServicesPracticeComponent } from './components/services-practice/services-practice.component';
import { ServiceEmployeeComponent } from './components/service-employee/service-employee.component';
import { ServiceProductComponent } from './components/service-product/service-product.component';
import { PostDataApiComponent } from './components/post-data-api/post-data-api.component';
import { ProductApiComponent } from './components/product-api/product-api.component';

@NgModule({
  // components, directives,pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    CategoriesComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectiveComponent,
    ProductListComponent,
    GreetComponent,
    EmployeeCrudComponent,
    CardComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    EventDirectivesComponent,
    PostCrudApiComponent,
    DirectivesPracticeComponent,
    DependentSelectComponent,
    NumberOnlyDirective,
    CustomDirectivesPracticesComponent,
    HighlightDirective,
    BackButtonDirective,
    CountClickDirective,
    PasswordStrengthDirective,
    StructureDirectiveDirective,
    CustomInputDirectiveDirective,
    InputValidationComponent,
    InputValidationDirective,
    PipesComponent,
    RemainingPipe,
    CustomPipesComponent,
    AssignmentCustomPipeComponent,
    OrdinalPipe,
    PrependTitlePipe,
    NameFilterPipe,
    CustomPipesPracticesComponent,
    TruncatePipe,
    SortByPipe,
    UniqueFilterPipe,
    CalculateAgePipe,
    MaskAccnoPipe,
    HighlightPipe,
    CapitalizePipe,
    NumberToWordsPipe,
    ShufflePipe,
    GroupByPipe,
    FilterPipe,
    ImpurePipesPracticesComponent,
    SortingPipe,
    ComponentCommunicationComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmployeeTableComponent,
    EmployeeAddComponent,
    EmployeesCrudComponent,
    LifeCycleHooksComponent,
    NgDoCheckComponent,
    ViewChild1Component,
    ViewChildParentComponent,
    ViewChild2Component,
    ServicesPracticeComponent,
    ServiceEmployeeComponent,
    ServiceProductComponent,
    PostDataApiComponent,
    ProductApiComponent,
  ],
  // all the dependent modules
  imports: [
      BrowserModule,
     AppRoutingModule,
     FormsModule,
     LoginModule,
     NgxPaginationModule,
     Ng2SearchPipeModule,
     HttpClientModule,
     ReactiveFormsModule
  ],
  // Services
  providers: [],
  // Which components to load
  bootstrap: [AppComponent],
})
export class AppModule {}
