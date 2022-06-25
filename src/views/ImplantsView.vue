<script setup>
import ImplantsTable from "../components/ImplantsTable.vue";
import { ref } from "vue";
import { useBackendStore } from "../stores/backend";
import VueTerminal from "../components/VueTerminal.vue";

const backendStore = useBackendStore();

const headerTitle = ref("");
headerTitle.value = backendStore.actionDialogBarInfo || "Terminal";

/* eslint-disable no-unused-vars */
const taskList = {
  ls: {
    description: "Lists all the files of a directory.",
    ls(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  alias: {
    description: "Converts complex commands into simpler ones.",
    alias(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  unalias: {
    description: "Remove an alias from the already defined aliases.",
    unalias(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  pwd: {
    description: "Display the current working directory location.",
    pwd(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  cd: {
    description: "Changes the current working directory.",
    cd(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  cp: {
    description: "Copies file content from one file to another file.",
    cp(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  rm: {
    description: "Removes a file.",
    rm(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  mv: {
    description: "Renames directories or files.",
    mv(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  mkdir: {
    description: "Creates directory.",
    mkdir(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  touch: {
    description: "Creates an empty file.",
    touch(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  chown: {
    description: "Changes the owner of a file or directory.",
    chown(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  chmod: {
    description: "Changes permission for a file or directory.",
    chmod(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  shutdown: {
    description: "Power off the machine.",
    shutdown(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  top: {
    description: "Interactive process viewer.",
    top(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  unzip: {
    description: "Extract the content of a .zip file.",
    unzip(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  cat: {
    description: "It is a multi-function command.",
    cat(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  ps: {
    description: "List the running processes from current shell session.",
    ps(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  kill: {
    description: "Terminates a process.",
    kill(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  history: {
    description: "Displays older commands from the shell command history.",
    history(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  passwd: {
    description: "Set a password for a user group.",
    passwd(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  which: {
    description: "Outputs the full path of shell commands.",
    which(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  shred: {
    description: "Overrides the contents of a file repeatedly.",
    shred(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  tail: {
    description: "Displays the last ten lines of a file.",
    tail(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  head: {
    description: "Displays the first ten lines of a file.",
    head(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  grep: {
    description: "Filters lines of text containing a certain string.",
    grep(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  whoami: {
    description: "Tells the name of the user.",
    whoami(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  wc: {
    description: "Counts words, lines, and characters.",
    wc(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  uname: {
    description: "Prints the operative system information.",
    uname(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  wget: {
    description: "Utility to retrieve content from the internet.",
    wget(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  df: {
    description: "Checks the disk space in the system.",
    df(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  groupadd: {
    description: "Creates a group.",
    groupadd(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  id: {
    description: "Tells about the user's id in the system.",
    id(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  locate: {
    description: "Searches a file in the database.",
    locate(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  useradd: {
    description: "Adds users.",
    useradd(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
  w: {
    description: "Displays who is logged on and what are they doing.",
    w(pushToList, input) {
      const p = new Promise(async (resolve) => {
        await backendStore.addTask("command", input);

        await backendStore.fetchTasks();

        const task = backendStore.tasks.at(-1);

        let intervalId = setInterval(async () => {
          await backendStore.fetchPlainResult(task.task_id);

          if (backendStore.plainResult !== "wait") {
            clearInterval(intervalId);
            pushToList({
              label: "",
              type: "",
              message: String.fromCharCode(
                ...backendStore.plainResult.plain_result_content
              ),
            });
            resolve({ type: "success", label: "", message: "" });
          }
        }, 2000);
      });

      return p;
    },
  },
};

const commandList = {
  version: {
    description: "Terminal information",
    messages: [
      { message: "v0.1" },
      { message: "Supports all Linux commands." },
      { message: "Some of the most popular commands are presented." },
      {
        message:
          "Most of the commands will need additional arguments, because implants location can't be changed",
      },
    ],
  },
};
</script>

<template>
  <h3 id="implants">Implants</h3>
  <ImplantsTable :rows="backendStore.getImplants" />
  <VueTerminal
    :task-list="taskList"
    :command-list="commandList"
    :show-header="true"
    :title="headerTitle"
  />
</template>

<style>
#implants {
  margin: auto;
  font-weight: bold;
  color: white;
}
</style>
