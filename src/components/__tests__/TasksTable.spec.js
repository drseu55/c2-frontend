import { it, describe, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { Quasar } from "quasar";
import TasksTable from "../TasksTable.vue";

describe("TasksTable.vue", () => {
  let wrapper;

  beforeEach(() => {
    setActivePinia(createPinia());

    wrapper = shallowMount(TasksTable, {
      global: {
        plugins: [Quasar],
      },
    });
  });

  it("test elements initialization", () => {
    expect(TasksTable).toBeTruthy();

    expect(wrapper.findAll("div").length).toEqual(1);

    expect(wrapper.findAll("q-table-stub").length).toEqual(1);
  });
});
