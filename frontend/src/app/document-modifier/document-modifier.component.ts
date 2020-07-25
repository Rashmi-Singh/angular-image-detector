import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng';

@Component({
    selector: 'app-doc-modifier',
    styleUrls: ['./document-modifier.component.scss'],
    templateUrl: './document-modifier.template.html',
})

export class DocumentModifierComponent implements OnInit {
    response: any;
    documentFormGroup: FormGroup;
    sectionTypes: SelectItem[];
    showParaFields: boolean;
    showTableFields: boolean;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.showParaFields = false;
        this.showTableFields = false;
        this.sectionTypes = [
            { label: 'Paragraph', value: 'para' },
            { label: 'Table', value: 'table' },
        ];
        this.prepareForm();
    }

    prepareForm(): void {
        this.documentFormGroup = new FormGroup({
            replacementStringPara: new FormControl(''),
            replacementStringTable: new FormControl(''),
            searchStringPara: new FormControl(''),
            searchStringTable: new FormControl(''),
            targetElement: new FormControl(null),
        });
        this.documentFormGroup.valueChanges.subscribe((value) => {
            if (value.targetElement && value.targetElement.length) {
                this.showParaFields = value.targetElement.indexOf('para') > -1;
                this.showTableFields = value.targetElement.indexOf('table') > -1;

            } else {
                this.showParaFields = false;
                this.showTableFields = false;
            }
        });
    }

    updateDocument(): void {
        const requestData = {
            sourcePath: 'D:\\angular-image-detector\\frontend\\src\\assets\\docs\\template.docx',
            searchStringPara: this.documentFormGroup.value.searchStringPara,
            replacementStringPara: this.documentFormGroup.value.replacementStringPara,
            searchStringTable: this.documentFormGroup.value.searchStringTable,
            replacementStringTable: this.documentFormGroup.value.replacementStringTable,
            targetElement: this.documentFormGroup.value.targetElement,
            targetPath: 'D:\\angular-image-detector\\frontend\\src\\assets\\docs\\template1.docx',
        };

        this.httpClient.post('/api/document', requestData).subscribe((data) => {
            this.response = data;
            alert(this.response);
        },
            (error) => {
                console.log(error);
            });
    }
}
