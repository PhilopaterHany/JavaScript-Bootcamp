function createSelectBox(startYear, endYear) {
    // Write Your Code Here
    document.write(`<select>`);
    for (i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);
