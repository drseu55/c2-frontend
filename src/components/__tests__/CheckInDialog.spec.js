import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import CheckInDialog from "../CheckInDialog.vue";

describe("CheckInDialog.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(CheckInDialog, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(CheckInDialog).toBeTruthy();

    expect(wrapper.findAll("q-dialog-stub").length).toEqual(1);
  });
});
