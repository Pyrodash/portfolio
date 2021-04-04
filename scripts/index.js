/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process')
const path = require('path')

const defaultCwd = path.join(__dirname, '..')

function codeErr(code) {
    const err = new Error(`Script exited with exit code ${code}`)

    err.code = code

    return err
}

exports.rootPath = defaultCwd

exports.run = function (...args) {
    return new Promise((resolve, reject) => {
        let opts = args[2]

        if (!opts) {
            if (
                args[1] &&
                typeof args[1] === 'object' &&
                !Array.isArray(args[1])
            ) {
                opts = args[1]
            } else {
                opts = {}
            }
        }

        if (!opts.cwd) {
            opts.cwd = defaultCwd
        }

        const child = spawn(...args)
        const stdout = []

        child.stdout.on('data', (data) => {
            stdout.push(data)
        })

        child.stdout.pipe(process.stdout)
        child.stderr.pipe(process.stderr)

        child.on('exit', (code) => {
            if (code !== 0) {
                reject(codeErr(code))
            } else {
                resolve(Buffer.concat(stdout))
            }
        })
    })
}
