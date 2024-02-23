javascript: (function() {
    let array = [],
        windowss = window.open(),
        check = 0,
        contentfirstcheck = "Please Go To Vaild Program",
        contentsecondcheck = `<html><head><title>WildCard Collector | Made With Love By Sho3la ❤</title></head><body>please go to <a href="https://hackerone.com/${window.location.pathname.split('/')[1]}/policy_scopes">https://hackerone.com/${window.location.pathname.split('/')[1]}/policy_scopes</a> Then Try The Script</body><style>:root { color-scheme: dark; } a { color: #9da2ff; } a:link { text-decoration: none; } </style></html>`;
    if (document.documentElement.outerHTML.includes("Submit report")) {
        if (window.location.pathname.includes("/policy_scopes")) {
            if (document.documentElement.outerHTML.includes("*.")) {
                document.querySelectorAll(".sc-fqkvVR strong").forEach((element) => {
                    if (element.innerText.startsWith("*.")) {
                        array.push(element.innerText.replace("*.", ""))
                    } else {
                        return
                    }
                })
            } else {
                check = 3
            }
        } else {
            check = 1
        }
    } else {
        check = 2
    }
    if (check == 1) {
        windowss.document.write(`${contentsecondcheck}`)
    } else if (check == 0) {
        windowss.document.write(`<html><head><title>WildCard Collector | Made With Love By Sho3la ❤</title></head><body>${array.map((e)=>`${e} <br>`).join("")}</body><style>:root { color-scheme: dark; }</style></html>`)
    } else if (check == 2) {
        windowss.document.write(`<html><head><title>WildCard Collector | Made With Love By Sho3la ❤</title></head><body>${contentfirstcheck}</body><style>:root { color-scheme: dark; }</style></html>`)
    } else if (check == 3) {
        windowss.document.write(`<html><head><title>WildCard Collector | Made With Love By Sho3la ❤</title></head><body>There Is No WildCard In This Program</body><style>:root { color-scheme: dark; }</style></html>`)
    }
})();
