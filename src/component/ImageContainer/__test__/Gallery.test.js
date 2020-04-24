import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "../Gallery";

describe("Banner Component", () => {
    it("should match snapshot when properties are present", () => {
        const {container} = render(
            <Gallery/>
        );

        expect(container).toMatchSnapshot();
    });
});
