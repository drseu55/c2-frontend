import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import LoginView from "../LoginView.vue";

describe("LoginView.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(LoginView, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(LoginView).toBeTruthy();

    expect(wrapper.findAll("div").length).toEqual(3);

    expect(wrapper.findAll("q-img-stub").length).toEqual(1);

    expect(wrapper.findAll("q-card-stub").length).toEqual(1);
  });
});
