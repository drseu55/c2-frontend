import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import AvailableImplantsView from "../AvailableImplantsView.vue";

describe("AvailableImplantsView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(AvailableImplantsView, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(AvailableImplantsView).toBeTruthy();

    expect(wrapper.findAll("h3").length).toEqual(1);

    expect(wrapper.find("h3").text()).toContain("Available Implant Profiles");

    expect(wrapper.findAll("q-list-stub").length).toEqual(1);
  });
});
