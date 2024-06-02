//middleware for logger
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "i am harry";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

//m2
app.use((req, res, next) => {
    console.log(m2)
    req.harry = "i am rohan";
    //res.send("hacked by m2")
    next()
})
