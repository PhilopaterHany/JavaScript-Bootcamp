/*
    ===========================================
    === Variables And Concatenation Challenge ===
    ===========================================

    [1] Create 3 Variables [Title, Desctiption, Date]
        -- All In One Statement
        -- Variable Name Must Be Two Words
        -- Title Content Is "Elzero"
        -- Description Content Is "Elzero Web School"
        -- Date Content Is "25/10"

    [2] Create Variable Contains Div And This Div Contains
        -- H3 For Title
        -- P For Paragraph
        -- Span For Time

    [3] Add This Card To Page 4 Times

    [4] Use Template Literals For Concatenate

    Extra (Optional):
        - Use ES6 Repeat
*/

let pageTitle = "Elzero",
    pageDesc = "Elzero Web School",
    pageDate = "25/10";

let page = `
<div>
    <h3>${pageTitle}</h3>
    <p>${pageDesc}</p>
    <span>${pageDate}</span>
</div>
`;
document.write(page.repeat(4));
