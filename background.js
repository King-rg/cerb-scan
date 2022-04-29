chrome.webNavigation.onCompleted.addListener(function(details)
{
    chrome.tabs.executeScript(details.tabId, {
        code: 'console.log("Cerberus - Detected Site Load")'
    })
})

chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) 
    {
        if (msg.name == 'request_assignment')
        {
            const apiCall = "https://cerberus.luceris.io/age-worker-command.php";

            fetch(apiCall).then(
            function(res)
            {
                if (res.status !== 200)
                {
                    sendResponse({type: "error", msg: "Cerberus Databases did not return status 200"});
                }

                res.json().then(function(data)
                {
                    sendResponse({type: "assignment", msg: data});
                });
            });
        }

        return true;
    });