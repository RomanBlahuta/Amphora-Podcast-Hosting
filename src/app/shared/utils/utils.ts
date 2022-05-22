export function setFormDataUtil(formDataEnum: any, formDataProps: any): FormData {
    const formData = new FormData();

    for (const field in formDataEnum) {
        formData.append(formDataEnum[field], formDataProps[formDataEnum[field]]);
        // console.log(formDataEnum[field], formDataProps[formDataEnum[field]]);
    }

    return formData;
}
