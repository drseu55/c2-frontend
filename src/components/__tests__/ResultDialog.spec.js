import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import ResultDialog from "../ResultDialog.vue";

describe("ResultDialog.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(ResultDialog, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(ResultDialog).toBeTruthy();

    expect(wrapper.findAll("q-dialog-stub").length).toEqual(1);
  });
});
