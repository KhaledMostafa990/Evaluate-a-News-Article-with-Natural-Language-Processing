import { handleSubmit } from "../src/client/js/formHandler"
import { postValidUrl } from "../src/client/js/postValidUrl";
import { urlChecker } from "../src/client/js/urlChecker";
 
describe("Testing the submit functionality", () => {

    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
    }

)});

describe("Testing the Post data functionality", () => {

    test("Testing the postValidUrl() function", () => {
           expect(postValidUrl).toBeDefined();
    }

)});

describe("Testing the URL cheker functionality", () => {

    test("Testing the urlChecker() function", () => {
           expect(urlChecker).toBeTruthy();
    }

)});

