import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import ActionsDialog from "../ActionsDialog.vue";

describe("ActionsDialog.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(ActionsDialog, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(ActionsDialog).toBeTruthy();

    expect(wrapper.findAll("q-dialog-stub").length).toEqual(1);
  });
});
