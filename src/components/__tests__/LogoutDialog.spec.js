import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import LogoutDialog from "../LogoutDialog.vue";

describe("LogoutDialog.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(LogoutDialog, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(LogoutDialog).toBeTruthy();

    expect(wrapper.findAll("q-dialog-stub").length).toEqual(1);
  });
});
