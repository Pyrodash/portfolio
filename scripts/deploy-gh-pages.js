/* eslint-disable @typescript-eslint/no-var-requires */
const { existsSync } = require('fs')
const { run } = require('.')
const { version } = require('../package.json')

async function deploy() {
    try {
        await run('git', ['checkout', '--orphan', 'gh-pages'])
        console.log('Building...')
        await run('npm', ['run', 'build'])
        const folderName = existsSync('dist') ? 'dist' : 'build'
        await run('git', ['--work-tree', folderName, 'add', '--all'])
        await run('git', [
            '--work-tree',
            folderName,
            'commit',
            '-m',
            `deploy ${version}`,
        ])
        console.log('Pushing to gh-pages...')
        await run('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
        await run('git', ['checkout', '-f', 'master'])
        await run('git', ['branch', '-D', 'gh-pages'])
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

deploy()
