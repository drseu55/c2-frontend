import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import NotFoundView from "../NotFoundView.vue";

describe("NotFoundView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(NotFoundView, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(NotFoundView).toBeTruthy();

    expect(wrapper.findAll("h3").length).toEqual(1);

    expect(wrapper.find("h3").text()).toContain("Page not found");
  });
});
