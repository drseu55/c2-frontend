import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import ImplantsTable from "../ImplantsTable.vue";

describe("ImplantsTable.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(ImplantsTable, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(ImplantsTable).toBeTruthy();

    expect(wrapper.findAll("actions-dialog-stub").length).toEqual(1);

    expect(wrapper.findAll("check-in-dialog-stub").length).toEqual(1);

    expect(wrapper.findAll("div").length).toEqual(1);

    expect(wrapper.findAll("q-table-stub").length).toEqual(1);
  });
});
