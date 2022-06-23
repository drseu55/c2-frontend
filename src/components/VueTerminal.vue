<script setup>
import { ref, computed, onMounted, nextTick, watch, onUpdated } from 'vue';
import { useBackendStore } from '../stores/backend';

const backendStore = useBackendStore();

const messageList = ref([]);
const actionResult = ref('');
const lastLineContent = ref('...');
const inputCommand = ref('');
const supportingCommandList = ref('');
const historyIndex = ref(0);
const commandHistory = ref([]);

const terminalWindow = ref({});
const terminalLastLine = ref({});
const inputBox = ref({});

const props = defineProps({
    commandList: {
        required: false,
        default: () => ({})
    },
    taskList: {
        required: false,
        default: () => ({})
    },
    title: {
        required: false,
        type: String,
        default: 'Terminal'
    },
    showHeader: {
        required: false,
        type: Boolean,
        default: true
    },
    greeting: {
        required: false,
        type: String,
        default: undefined
    },
    defaultTaskCommand: {
        required: false,
        type: String,
        default: 'Terminal'
    },
    defaultTask: {
        required: false,
        type: String,
        default: undefined
    },
    prompt: {
        required: false,
        default: undefined
    },
    showHelpMessage: {
        required: false,
        default: true
    },
    unknownCommandMessage: {
        required: false,
        default: undefined
    },
    autoFocus: {
        required: false,
        default: true
    }
});

// supportingCommandList.value = Object.keys(props.commandList).concat(Object.keys(props.taskList));

const lastLineClass = computed(() => {
    if (lastLineContent.value === '&nbsp') {
        return 'cursor'
    } else if (lastLineContent.value === '...') {
        return 'loading'
    } else {
        return '';
    }
});

function handleFocus() {
    if (backendStore.isTerminalVisible) {
        inputBox.value.focus();
    }
}

function handleCommand(e) {
    if (e.keyCode !== 13) {
        handlekeyEvent(e);
        return;
    }

    console.log(lastLineContent.value);

    commandHistory.value.push(inputCommand.value);
    historyIndex.value = commandHistory.value.length;

    if (typeof props.prompt !== 'undefined') {
        pushToList({ message: `${props.prompt} ${inputCommand.value}` });
    } else {
        pushToList({ message: `$ ${inputCommand.value}` });
    }

    if (!inputCommand.value) return;

    const commandArr = inputCommand.value.split(' ');

    if (commandArr[0] === 'help') {
        printHelp(commandArr[1]);
    } else if (props.commandList[inputCommand.value]) {
        props.commandList[inputCommand.value].messages.map(item => pushToList(item));
    } else if (props.taskList[inputCommand.value.split(' ')[0]]) {
        handleRun(inputCommand.value.split(' ')[0], inputCommand.value)
    } else {
        if (props.unknownCommandMessage) {
            pushToList(props.unknownCommandMessage);
        } else {
            pushToList({ level: 'System', message: 'Unknown Command.' });
            pushToList({ level: 'System', message: 'type "help" to get a supporting command list.' });
        }
    }

    inputCommand.value = '';
    autoScroll();
}

function handlekeyEvent(e) {
    switch (e.keyCode) {
        case 38:
            historyIndex.value = historyIndex.value === 0 ? 0 : historyIndex.value - 1;
            inputCommand.value = commandHistory.value[historyIndex.value];
            break;
        case 40:
            historyIndex.value = historyIndex.value === commandHistory.value.length ? commandHistory.value.length : historyIndex.value + 1;
            inputCommand.value = commandHistory.value[historyIndex.value];
            break;
        default:
            break;
    }
}

function handleRun(taskName, input) {
    if (!props.taskList[taskName] || !props.taskList[taskName][taskName])
        return Promise.resolve();

    lastLineContent.value = '...';

    return props.taskList[taskName][taskName](pushToList, input).then(done => {
        pushToList(done);
        lastLineContent.value = '&nbsp';
    }).catch(error => {
        pushToList(error || { type: 'error', label: 'Error', message: 'Something went wrong!' });
        lastLineContent.value = '&nbsp';
    });
}

function pushToList(message) {
    messageList.value.push(message);
    autoScroll();
}

function printHelp(input) {
    if (!input) {
        pushToList({ message: 'Here is a list of supporting command.' });
        supportingCommandList.value.map(command => {
            if (props.commandList[command]) {
                pushToList({ type: 'success', label: command, message: '---> ' + props.commandList[command].description });
            } else {
                pushToList({ type: 'success', label: command, message: '---> ' + props.taskList[command].description });
            }

            return undefined;
        });

        pushToList({ message: 'Enter help <command> to get help for a particular command.' });
    } else {
        const command = props.commandList[input] || props.taskList[input];
        pushToList({ message: command.description });
    }

    autoScroll();
}

/* eslint-disable no-unused-vars */
function time() {
    return new Date().toLocaleTimeString().split('').splice(2).join('');
}

function autoScroll() {
    nextTick(() => {
        terminalWindow.value.scrollTop = terminalLastLine.value.offsetTop;
    })
}

/* eslint-disable no-unused-vars */
function isDisabled() {
    if (lastLineContent.value !== '&nbsp') {
        return false;
    } else {
        return true;
    }
}

function closeTerminal() {
    backendStore.isTerminalVisible = false;
}

onMounted(async () => {
    supportingCommandList.value = Object.keys(props.commandList).concat(Object.keys(props.taskList));

    if (props.defaultTask) {
        await handleRun(props.defaultTask);
    }

    if (props.showHelpMessage) {
        pushToList({ level: 'System', message: 'Type "help" to get a supporting command list.' });
    }

    lastLineContent.value = '&nbsp';

    if (props.autoFocus) {
        handleFocus();
    }
});

onUpdated(() => {
    handleFocus();
})

watch(
    () => backendStore.isTerminalVisible,
    function () {
        messageList.value = [];
    }
);

</script>
<template>
    <div class="vue-terminal" @click="handleFocus" v-if="backendStore.isTerminalVisible">
        <div class="terminal-header" v-if="props.showHeader">
            <h4>{{ props.title }}</h4>
            <div class="shell-dots">
                <q-img src="../assets/terminal-logo.png" id="terminal-logo"></q-img>
            </div>
            <div id="close-btn">
                <q-btn dense flat color="red" icon="close" @click="closeTerminal"></q-btn>
            </div>
        </div>

        <div>
            <div class="terminal-window" ref="terminalWindow">
                <p v-if="props.greeting">{{ props.greeting }}</p>
                <p v-if="props.defaultTaskCommand">
                    <span class="prompt"></span><span class="cmd">{{ props.defaultTaskCommand }}</span>
                </p>

                <p v-for="(item, index) in messageList" :key="index">
                    <span>{{ item.time }}</span>
                    <span v-if="item.label" :class="item.type">{{ item.label }}</span>
                <pre class="cmd" v-if="!item.message.list">{{ item.message }}</pre>
                <span class="cmd" v-else>
                    <pre>{{ item.message.text }}</pre>
                    <ul>
                        <li v-for="(li, index) in item.message.list" :key="index">
                            <span v-if="li.label" :class="li.type">{{ li.label }}:</span>
                            <pre>{{ li.message }}</pre>
                        </li>
                    </ul>
                </span>
                </p>

                <p v-if="actionResult"> <span class="cmd">{{ actionResult }}</span></p>

                <p class="terminal-last-line" ref="terminalLastLine">
                    <span v-if="lastLineContent === '&nbsp'">
                        <span v-if="typeof props.prompt !== 'undefined'" class="prompt">{{ props.prompt }}</span>
                        <span class="prompt" v-else>\{{ props.title }}</span>
                    </span>
                    <span>{{ inputCommand }}</span>
                    <span :class="lastLineClass" v-html="lastLineContent"></span>
                    <input v-model="inputCommand" :disabled="false" :autofocus="props.autoFocus" type="text"
                        @keyup="handleCommand($event)" ref="inputBox" class="input-box">
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.vue-terminal {
    position: relative;
    margin: 0 auto;
    width: 75%;
    border-radius: 4px;
    color: white;
    margin-bottom: 10px;
    max-height: 580px;
}

.vue-terminal .terminal-window {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: auto;
    z-index: 1;
    margin-top: 30px;
    max-height: 400px;
    padding-top: 50px;
    background-color: rgb(3, 9, 36);
    min-height: 140px;
    padding: 20px;
    font-weight: normal;
    font-family: Monaco, Menlo, Consolas, monospace;
    color: #fff;

    pre {
        font-family: Monaco, Menlo, Consolas, monospace;
        white-space: pre-wrap;
    }

    p {
        overflow-wrap: break-word;
        word-break: break-all;
        font-size: 13px;

        .cmd {
            line-height: 24px;
        }

        .info {
            padding: 2px 3px;
            background: #2980b9;
        }

        .warning {
            padding: 2px 3px;
            background: #f39c12;
        }

        .success {
            padding: 2px 3px;
            background: #27ae60;
        }

        .error {
            padding: 2px 3px;
            background: #c0392b;
        }

        .system {
            padding: 2px 3px;
            background: #bdc3c7;
        }
    }

    pre {
        display: inline;
    }
}

.terminal-header ul.shell-dots li {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin-left: 6px
}

#terminal-logo {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 6px
}

#close-btn {
    position: absolute;
    top: 13px;
    right: 8px;
    padding-left: 0;
    margin: 0;
}

.terminal-header ul .shell-dots-red {
    background-color: rgb(200, 48, 48);
}

.terminal-header ul .shell-dots-yellow {
    background-color: rgb(247, 219, 96);
}

.terminal-header ul .shell-dots-green {
    background-color: rgb(46, 201, 113);
}

.terminal-header {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgb(149, 149, 152);
    text-align: center;
    padding: 2px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px
}

.terminal-header h4 {
    font-size: 14px;
    margin: 5px;
    letter-spacing: 1px;
}

.terminal-header div.shell-dots {
    position: absolute;
    top: 13px;
    left: 8px;
    padding-left: 0;
    margin: 0;
}

.vue-terminal .terminal-window .prompt::before {
    content: "$";
    margin-right: 10px;
}

.vue-terminal .terminal-window .cursor {
    margin: 0;
    background-color: white;
    animation: blink 1s step-end infinite;
    -webkit-animation: blink 1s step-end infinite;
    margin-left: -5px;
}

@keyframes blink {
    50% {
        visibility: hidden;
    }
}

@-webkit-keyframes blink {
    50% {
        visibility: hidden;
    }
}

.vue-terminal .terminal-window .loading {
    display: inline-block;
    width: 0;
    overflow: hidden;
    overflow-wrap: normal;
    animation: load 1.2s step-end infinite;
    -webkit-animation: load 1.2s step-end infinite;
}

@keyframes load {
    0% {
        width: 0px;
    }

    20% {
        width: 5px;
    }

    40% {
        width: 10px;
    }

    60% {
        width: 15px;
    }

    80% {
        width: 20px;
    }
}

@-webkit-keyframes load {
    0% {
        width: 0px;
    }

    20% {
        width: 5px;
    }

    40% {
        width: 10px;
    }

    60% {
        width: 15px;
    }

    80% {
        width: 20px;
    }
}

.terminal-last-line {
    font-size: 0;
    word-spacing: 0;
    letter-spacing: 0;
}

.input-box {
    position: relative;
    background: rgb(3, 9, 36);
    border: none;
    width: 1px;
    opacity: 0;
    cursor: default;
}

.input-box:focus {
    outline: none;
    border: none;
}
</style>