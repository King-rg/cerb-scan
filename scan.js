console.log("Cerberus - Injected")

chrome.runtime.sendMessage({name: "request_assignment"}, function(response) {
    console.log("Cerberus - Requesting Assignment: ", response);
});

document.body.style.background = 'black';
a = document.getElementsByClassName("lead");
ages = []
for (let item of a)
{
  if (item.textContent[0] == "(")
  {
    ages.push(parseInt(item.textContent.replace('(', '').replace(')', '')))
  }
}

chrome.runtime.sendMessage({text: ages}, function(response) {
    console.log("Cerberus - Requesting Service Worker: ", response);
});