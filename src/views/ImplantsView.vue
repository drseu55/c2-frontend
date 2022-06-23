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
  open: {
    description: "Open a specified url in a new tab.",
    open(pushToList, input) {
      const p = new Promise((resolve, reject) => {
        let url = input.split(" ")[1];
        if (!url) {
          reject({
            type: "error",
            label: "Error",
            message: "a url is required!",
          });
          return;
        }
        pushToList({ type: "success", label: "Success", message: "Opening" });

        if (input.split(" ")[1].indexOf("http") === -1) {
          url = "http://" + input.split(" ")[1];
        }
        window.open(url, "_blank");
        resolve({ type: "success", label: "Done", message: "Page Opened!" });
      });
      return p;
    },
  },
  ls: {
    description: "Lists all the files of a directory.",
    ls(pushToList, input) {},
  },
  alias: {
    description: "Converts complex commands into simpler ones.",
    alias(pushToList, input) {},
  },
  unalias: {
    description: "Remove an alias from the already defined aliases.",
    unalias(pushToList, input) {},
  },
  pwd: {
    description: "Display the current working directory location.",
    pwd(pushToList, input) {},
  },
  cd: {
    description: "Changes the current working directory.",
    cd(pushToList, input) {},
  },
  cp: {
    description: "Copies file content from one file to another file.",
    cp(pushToList, input) {},
  },
  rm: {
    description: "Removes a file.",
    rm(pushToList, input) {},
  },
  mv: {
    description: "Renames directories or files.",
    mv(pushToList, input) {},
  },
  mkdir: {
    description: "Creates directory.",
    mkdir(pushToList, input) {},
  },
  touch: {
    description: "Creates an empty file.",
    touch(pushToList, input) {},
  },
  chown: {
    description: "Changes the owner of a file or directory.",
    chown(pushToList, input) {},
  },
  chmod: {
    description: "Changes permission for a file or directory.",
    chmod(pushToList, input) {},
  },
  shutdown: {
    description: "Power off the machine.",
    shutdown(pushToList, input) {},
  },
  top: {
    description: "Interactive process viewer.",
    top(pushToList, input) {},
  },
  unzip: {
    description: "Extract the content of a .zip file.",
    unzip(pushToList, input) {},
  },
  cat: {
    description: "It is a multi-function command.",
    cat(pushToList, input) {},
  },
  ps: {
    description: "List the running processes from current shell session.",
    ps(pushToList, input) {},
  },
  kill: {
    description: "Terminates a process.",
    kill(pushToList, input) {},
  },
  history: {
    description: "Displays older commands from the shell command history.",
    history(pushToList, input) {},
  },
  passwd: {
    description: "Set a password for a user group.",
    passwd(pushToList, input) {},
  },
  which: {
    description: "Outputs the full path of shell commands.",
    which(pushToList, input) {},
  },
  shred: {
    description: "Overrides the contents of a file repeatedly.",
    shred(pushToList, input) {},
  },
  tail: {
    description: "Displays the last ten lines of a file.",
    tail(pushToList, input) {},
  },
  head: {
    description: "Displays the first ten lines of a file.",
    head(pushToList, input) {},
  },
  grep: {
    description: "Filters lines of text containing a certain string.",
    grep(pushToList, input) {},
  },
  whoami: {
    description: "Tells the name of the user.",
    whoami(pushToList, input) {},
  },
  wc: {
    description: "Counts words, lines, and characters.",
    wc(pushToList, input) {},
  },
  uname: {
    description: "Prints the operative system information.",
    uname(pushToList, input) {},
  },
  wget: {
    description: "Utility to retrieve content from the internet.",
    wget(pushToList, input) {},
  },
  df: {
    description: "Checks the disk space in the system.",
    df(pushToList, input) {},
  },
  groupadd: {
    description: "Creates a group.",
    groupadd(pushToList, input) {},
  },
  id: {
    description: "Tells about the user's id in the system.",
    id(pushToList, input) {},
  },
  locate: {
    description: "Searches a file in the database.",
    locate(pushToList, input) {},
  },
  useradd: {
    description: "Adds users.",
    useradd(pushToList, input) {},
  },
  w: {
    description: "Displays who is logged on and what are they doing.",
    w(pushToList, input) {},
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
