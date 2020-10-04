import { AbstractControl} from '@angular/forms';

export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
    return (!(control.value.toUpperCase() !== control.value && control.value.toLowerCase() !== control.value)) ? {'password': true} : null;

};