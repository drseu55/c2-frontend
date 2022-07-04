import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import ImplantsView from "../ImplantsView.vue";

describe("ImplantsView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(ImplantsView, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(ImplantsView).toBeTruthy();

    expect(wrapper.findAll("h3").length).toEqual(1);

    expect(wrapper.find("h3").text()).toContain("Implants");

    expect(wrapper.findAll("implants-table-stub").length).toEqual(1);

    expect(wrapper.findAll("vue-terminal-stub").length).toEqual(1);
  });
});
