var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";
describe("Function change event run successfully", () => {
    const container = new MobileTextArea({ value: "Orange" });
    container.addEventListener("change", (event) => {
        expect(event.detail.value).to.have.equal("Apple");
        expect(event.detail.oldValue).to.have.equal("Orange");
    });
    it("Function change event run successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const textareaEl = el.querySelector(".kuc-mobile-textarea__form__textarea");
        textareaEl.value = "Apple";
        const event = new CustomEvent("change");
        textareaEl.dispatchEvent(event);
    }));
});
