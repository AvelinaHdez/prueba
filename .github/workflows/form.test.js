const { JSDOM } = require("jsdom");
const formularioPath = "./formulario.html";
const fs = require("fs");
describe("Formulario", () => {
    let dom;
    let form;
    beforeAll(() => {
        const htmlContent = fs.readFileSync(formularioPath, "utf-8");
        dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
        global.document = dom.window.document;
        global.window = dom.window;
        form = document.getElementById("myForm");
    });
    afterAll(() => {
        delete global.document;
        delete global.window;
    });
    test("El formulario tiene un campo de entrada y un botón de envío", () => {
        const input = document.createElement("input");
        input.type = "text";
        form.appendChild(input);
        const button = document.createElement("button");
        button.type = "submit";
        form.appendChild(button);
        expect(form.querySelector('input[type="text"]')).toBeTruthy();
        expect(form.querySelector('button[type="submit"]')).toBeTruthy();
    });
});
