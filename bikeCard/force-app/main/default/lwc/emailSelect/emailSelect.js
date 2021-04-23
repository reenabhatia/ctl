import { LightningElement } from 'lwc';

export default class RadioGroupBasic extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Email@t.com', value: 'option1' },
            { label: 'Email2@t.com', value: 'option2' },
        ];
    }
}
