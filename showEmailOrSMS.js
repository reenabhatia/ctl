import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

export default class ShowEmailOrSMS extends OmniscriptBaseMixin(LightningElement)  {
    @api options = [];
    @api notificationMethod="";
    label = "Send To Email:";
    required = true;
    handleChange(event) {
        const selectedValue = event.detail.value;
        console.log("target - "+JSON.stringify(event.target.value));
        console.log("detail - "+JSON.stringify(event.detail.value));
        this.omniUpdateDataJson(selectedValue);
    }
    connectedCallback() {
        console.log("options - "+JSON.stringify(this.options));
        console.log("notificationMethod - "+JSON.stringify(this.notificationMethod));
        if(this.options) {
            let optionList = [];
            this.options.forEach(element => {
                //if(this.notificationMethod === "Email") {
                    if(element.Email) {
                        optionList.push({label : element.Email, value: element.Email});
                    }
                //} else if(this.notificationMethod === "SMS") {
                    //optionList.push({label : element.Phone, value: element.Phone});
                //}
            });
            this.options = optionList;
        }
    }
}