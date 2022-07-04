import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import DashboardView from "../DashboardView.vue";

describe("DashboardView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(DashboardView, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(DashboardView).toBeTruthy();

    expect(wrapper.findAll("h3").length).toEqual(1);

    expect(wrapper.find("h3").text()).toContain("Dashboard");

    expect(wrapper.findAll("h4").length).toEqual(1);

    expect(wrapper.find("h4").text()).toContain("Active implants");

    expect(wrapper.findAll("world-map-stub").length).toEqual(1);
  });
});
