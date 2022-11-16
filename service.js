function waitForService(waitTime, retryCount) {
    const promises = []
    const tryOuts = []
    const delay = waitTime
    while (retryCount--) {
        let serverAns = new Promise((resolve, reject) => {
            let tryOut = setTimeout(() => {
                console.log('try')
                if ((Math.random() > 0.5)) {
                    resolve(true)
                    tryOuts.forEach(clearTimeout)
                } else reject(false)
            }, waitTime)
            tryOuts.push(tryOut)
            waitTime += delay
        })
        promises.push(serverAns)
    }
    return Promise.any(promises)
}


module.exports = {
    waitForService
}

