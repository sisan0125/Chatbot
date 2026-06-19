function send() {
    let input = document.getElementById("msg");
    let chat = document.getElementById("chat");

    let userText = input.value;

    chat.innerHTML += "<div>🧑 你: " + userText + "</div>";

    let botReply = getReply(userText);

    chat.innerHTML += "<div>🤖 Bot: " + botReply + "</div>";

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

function getReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("你好")) {
        return "你好！我是機器人 🤖";
    } else if (msg.includes("名字")) {
        return "我叫ChatBot";
    } else {
        return "我還不懂這個問題";
    }
}
