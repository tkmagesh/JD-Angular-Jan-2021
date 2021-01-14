import { CalculatorComponent } from './calculator.component';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import  Calculator from './calculator';

describe('Calculator Component', () => {
    let component: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;
    let calculatorSpy = jasmine.createSpyObj("Calculator", ["add", "subtract"]);
    calculatorSpy.add.and.returnValue(30);
    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations : [CalculatorComponent],
            providers : [
                { provide: Calculator , useValue : calculatorSpy}
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(CalculatorComponent);
        component = fixture.componentInstance;

    });

    it("Should create a component instance", () => {
        expect(component).toBeDefined();
    });

    it("Should trigger the add operation", () => {
        component.n1 = 10;
        component.n2 = 20;
        component.onAddClick();
        expect(calculatorSpy.add).toHaveBeenCalledWith(10, 20);
        expect(component.result).toBe(30);
    })
})