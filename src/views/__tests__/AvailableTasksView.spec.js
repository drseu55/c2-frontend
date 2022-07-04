import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import AvailableTasksView from "../AvailableTasksView.vue";

describe("AvailableTasksView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(AvailableTasksView, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(AvailableTasksView).toBeTruthy();

    expect(wrapper.findAll("h3").length).toEqual(1);

    expect(wrapper.find("h3").text()).toContain("Available Tasks");

    expect(wrapper.findAll("q-list-stub").length).toEqual(1);
  });
});
