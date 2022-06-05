export function setFormDataUtil(formDataEnum: any, formDataProps: any): FormData {
    const formData = new FormData();

    for (const field in formDataEnum) {
        formData.append(formDataEnum[field], formDataProps[formDataEnum[field]]);
        // console.log(formDataEnum[field], formDataProps[formDataEnum[field]]);
    }

    return formData;
}

export function parseDurationTimeUtil(numberOfSeconds: number): string {
    let seconds = numberOfSeconds;

    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return `${(hours >= 1) ? `${hours}h ` : ''}${(minutes >= 1) ? `${minutes}m ` : ''}${(seconds >= 1) ? `${seconds}s` : ''}`;
}
