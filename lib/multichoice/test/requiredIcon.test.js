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
import { MultiChoice } from "../index";
describe("requiredIcon default prop is false", () => {
    const container = new MultiChoice({});
    it("requiredIcon default prop is false", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-multi-choice__label__required-icon"));
        yield expect(requiredEl).to.be.visible;
    }));
});
describe("requiredIcon prop set to true successfully", () => {
    const container = new MultiChoice({ requiredIcon: true });
    it("requiredIcon prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-multi-choice__label__required-icon"));
        yield expect(requiredEl.innerText).to.have.equals("*");
    }));
});
describe("requiredIcon prop set to true successfully", () => {
    const container = new MultiChoice({});
    container.requiredIcon = true;
    it("requiredIcon prop set to true successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-multi-choice__label__required-icon"));
        yield expect(requiredEl.innerText).to.have.equals("*");
    }));
});
describe("requiredIcon prop set to false successfully", () => {
    const container = new MultiChoice({});
    container.requiredIcon = false;
    it("requiredIcon prop set to false successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-multi-choice__label__required-icon"));
        yield expect(requiredEl).to.be.visible;
    }));
});
describe("requiredIcon default prop set to null", () => {
    // @ts-ignore
    const container = new MultiChoice({ requiredIcon: null });
    it("requiredIcon default prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-multi-choice__label__required-icon"));
        yield expect(requiredEl).to.be.visible;
    }));
});
describe("requiredIcon prop set to null", () => {
    const container = new MultiChoice({});
    // @ts-ignore
    container.requiredIcon = null;
    it("requiredIcon prop set to null", () => __awaiter(void 0, void 0, void 0, function* () {
        const el = yield fixture(container);
        const requiredEl = (yield el.querySelector(".kuc-multi-choice__label__required-icon"));
        yield expect(requiredEl).to.be.visible;
    }));
});
