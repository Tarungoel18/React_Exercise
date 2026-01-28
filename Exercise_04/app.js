function delayedUpperCase(x) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof x == "string") {
                res(x.toUpperCase());
            } else {
                rej(x);
            }
        }, 500);
    });
}

delayedUpperCase("123")
    .then((res) => console.log(res, "Resolved"))
    .catch((err) => console.log(err, "Rejected"));
delayedUpperCase(123)
    .then((res) => console.log(res, "Resolved"))
    .catch((err) => console.log(err, "Rejected"));